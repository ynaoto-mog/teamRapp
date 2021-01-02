<template>
  <div class="allMatch">
    <div v-for="m in matches" v-bind:key="m.id">
      <span v-if="m.resultsId === ''" style="color:red;">成績入力yet</span
      ><br />
      対戦相手：{{ m.opponent }}|球場：{{ m.place }}
      <a class="allMatchConfirm" v-on:click="openModal(m.id)">詳細確認</a>
      <matchdetail
        class="detailInAllMatch"
        v-if="detailJudge === m.id"
        v-bind:matchId="m.id"
      />
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

<style lang="scss">
.allMatch {
  width: 100%;
  padding: 3vh 5%;
  font-weight: bold;
}
.allMatchConfirm {
  margin-bottom: 3vh;
  margin-left: 1.6%;
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #ff7707 0%, #f74e0b 100%);
  transition: 0.4s;
}
.allMatchConfirm:hover {
  background-image: linear-gradient(45deg, #ff0707 0%, #f76a35 100%);
}
.detailInAllMatch {
  background-color: #f7d495;
  width: 40%;
  margin-left: 20%;
}
</style>
