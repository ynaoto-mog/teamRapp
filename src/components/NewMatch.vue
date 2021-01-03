<template>
  <div class="newMatch">
    対戦相手<input
      type="text"
      v-model="opponent"
      placeholder="対戦相手"
    /><br />
    試合日程
    <input type="number" v-model="year" />年
    <input type="number" v-model="month" />月
    <input type="number" v-model="date" />日<br />
    球場名
    <input type="text" v-model="place" />
    <ul v-for="i in parseInt(pNum)" v-bind:key="i">
      {{
        i
      }}番
      <vSelect :options="memberData" v-model="proMem[i - 1]" />
      <vSelect :options="positions" v-model="proPosi[i - 1]" />
    </ul>
    <a v-on:click="submit">決定</a>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import firebase from "../firebase.js";
const firestore = firebase.firestore();
export default {
  props: {
    pNum: String
  },
  components: {
    vSelect: vSelect
  },
  data: () => ({
    opponent: "",
    members: [],
    selected: new Array(9).fill({ member: "", position: "" }),
    proPosi: new Array(9).fill(""), //暫定ポジションを一時的に取得
    proMem: new Array(9).fill(""), //
    memberData: [], //firebaseから取得する全員のデータd
    positions: [
      "投手",
      "捕手",
      "一塁手",
      "二塁手",
      "三塁手",
      "遊撃手",
      "左翼手",
      "中堅手",
      "右翼手"
    ],
    year: new Number(),
    month: new Number(),
    date: new Number(),
    place: ""
  }),
  methods: {
    async submit() {
      const month = this.month - 1;
      const matchData = {
        date: new Date(this.year, month, this.date),
        opponent: this.opponent,
        place: this.place,
        memberList: this.proMem,
        positionList: this.proPosi,
        resultsId: ""
      };
      try {
        await firestore.collection("matches").add(matchData);
        alert("試合を登録しました！");
        (this.opponent = ""),
          (this.year = ""),
          (this.month = ""),
          (this.date = ""),
          (this.place = ""),
          (this.proPosi = new Array(9).fill("")),
          (this.proMem = new Array(9).fill(""));
      } catch (e) {
        alert("山路に報告お願いします！");
        console.log(e.message);
      }
    }
  },
  created: async function() {
    const memberD = await firestore.collection("members").get();
    memberD.docs.forEach(doc => {
      this.memberData.push(doc.data().name);
    });
    (this.selected = new Array(this.pNum).fill({ member: "", position: "" })),
      (this.proPosi = new Array(this.pNum).fill("")),
      (this.proMem = new Array(this.pNum).fill(""));
  }
};
</script>

<style></style>
