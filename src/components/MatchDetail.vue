<template>
  <div class="matchDetail" v-if="match[0]">
    <div v-if="match[0].resultsId === ''">
      <table v-for="i in pNum" v-bind:key="i">
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
              placeholder="打席数"
            />：<input
              type="number"
              v-model="fours[i - 1]"
              placeholder="四死球数"
            />
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
            }}：安打/打数=>{{ hitsResults[i - 1] }}/{{
              timesResults[i - 1] - foursResults[i - 1]
            }},四死球数=>{{ foursResults[i - 1] }}
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
    times: [], //打席数
    hits: [], //ヒット数
    fours: [], //選んだ四球数+デッドボール数
    rbi: [], //打点 times,hits,fours,rbiはcreatedで再定義
    resultsLength: new Number(),
    hitsResults: [],
    timesResults: [],
    foursResults: [],
    pNum: new Number()
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
        .set(results); //IDを設定する際の書き方 not add
      alert("成績を登録しました！");
      (this.times = new Array(9).fill("")),
        (this.hits = new Array(9).fill("")),
        (this.fours = new Array(9).fill("")),
        (this.rbi = new Array(9).fill(""));

      firestore
        .collection("matches")
        .doc(this.matchId)
        .update({ resultsId: this.matchId });
    },
    getRealTimes() {}
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
    this.pNum = matchD.data().memberList.filter(n => n !== "").length;
    this.times = new Array(this.pNum).fill("");
    this.hits = new Array(this.pNum).fill("");
    this.fours = new Array(this.pNum).fill("");
    //
    if (this.match[0].resultsId !== "") {
      const resultsD = await firestore
        .collection("results")
        .doc(this.matchId)
        .get(); //resultとmatchはIDが同じなので、doc()内は一緒。
      this.hitsResults = resultsD.data().hits; //全員の安打数が配列型式で入っている
      this.timesResults = resultsD.data().times; //全員の安打数が配列型式で入っている
      this.foursResults = resultsD.data().fours;
      this.resultsLength = this.timesResults.length;
    }
  }
};
</script>

<style></style>
