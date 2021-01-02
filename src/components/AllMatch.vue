<template>
  <div>
    <div v-for="m in matches" v-bind:key="m.id">
      <span v-if="m.resultsId === ''" style="color:red;">成績入力yet</span
      ><br />
      対戦相手：{{ m.opponent }}|球場：{{ m.place }}<br />
      <a v-on:click="openModal(m.id)">詳細確認</a>
      <matchdetail v-if="detailJudge === m.id" v-bind:matchId="m.id" />
    </div>
  </div>
</template>

<script>
import firebase from "../firebase.js";
import MatchDetail from "./MatchDetail.vue";
const firestore = firebase.firestore();
export default {
  name: "allmatch",
  components: {
    matchdetail: MatchDetail
  },
  data: () => ({
    matches: [],
    detailJudge: ""
  }),
  methods: {
    openModal(id) {
      if (this.detailJudge !== id) {
        this.detailJudge = id;
      } else {
        this.detailJudge = "";
      }
    }
  },
  async created() {
    const matchData = await firestore.collection("matches").get();
    matchData.docs.forEach(doc => {
      this.matches.push({
        id: doc.id,
        ...doc.data()
      });
    });
  }
};
</script>

<style></style>
