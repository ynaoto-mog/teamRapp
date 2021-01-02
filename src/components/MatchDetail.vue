<template>
  <div class="matchDetail" v-if="match[0]">
    <div v-if="match[0].resultsId === ''">
      <table v-for="i in 9" v-bind:key="i">
        <tr>
          <td>
            {{ match[0].positionList[i - 1] }}：{{
              match[0].memberList[i - 1]
            }}：<input
              type="number"
              v-model="hits[i - 1]"
              placeholder="安打数"
            />：<input
              type="number"
              v-model="times[i - 1]"
              placeholder="打数"
            />：打率{{ hits[i - 1] / times[i - 1] }}
          </td>
        </tr>
      </table>

      <button v-on:click="confirmResults">成績確定！</button>
    </div>
    <div v-else>
      <table v-for="i in resultsLength" v-bind:key="i">
        <tr>
          <td>
            {{ match[0].positionList[i - 1] }}：{{
              match[0].memberList[i - 1]
            }}：安打/打数=>{{ hitsResults[i - 1] }}/{{ timesResults[i - 1] }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase.js";
const firestore = firebase.firestore();
export default {
  name: "matchdetail",
  props: {
    matchId: String
  },
  data: () => ({
    detailJudge: false,
    match: [],
    results: [],
    times: new Array(9).fill(""),
    hits: new Array(9).fill(""),
    fours: new Array(9).fill(""),
    rbi: new Array(9).fill(""), //打数,
    resultsLength: new Number(),
    hitsResults: [],
    copytimes: [],
    timesResults: []
  }),
  methods: {
    async confirmResults() {
      const results = {
        members: this.match[0].memberList,
        times: this.times,
        hits: this.hits,
        rbi: this.rbi,
        fours: this.fours,
        matchId: this.matchId
      };
      await firestore
        .collection("results")
        .doc(this.matchId)
        .set(results);
      alert("成績を登録しました！");
      (this.times = new Array(9).fill("")),
        (this.hits = new Array(9).fill("")),
        (this.fours = new Array(9).fill("")),
        (this.rbi = new Array(9).fill(""));

      firestore
        .collection("matches")
        .doc(this.matchId)
        .update({ resultsId: this.matchId });
    }
  },
  async created() {
    const matchD = await firestore
      .collection("matches")
      .doc(this.matchId)
      .get();
    await this.match.push({
      id: matchD.id,
      ...matchD.data()
    });
    if (this.match[0].resultsId !== "") {
      const resultsD = await firestore
        .collection("results")
        .doc(this.matchId)
        .get(); //resultとmatchはIDが同じなので、doc()内は一緒。
      await this.results.push({
        id: resultsD.id,
        ...resultsD.data()
      });
      this.hitsResults = this.results[0].hits;
      this.timesResults = this.results[0].times;
      this.copytimes = this.timesResults.filter(n => n !== ""); //無駄な配列要素を削除
      const len = this.copytimes.length;
      this.resultsLength = len;
    }
  }
};
</script>

<style></style>
