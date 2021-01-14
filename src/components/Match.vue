<template>
  <div class="match">
    <h3 class="secondMenuInMatch">Second Menu =></h3>
    <ul class="matchUl">
      <li v-if="matchWord !== 'newMatch'" class="matchListTwo">
        <input
          class="matchInput"
          type="number"
          v-model="pNum"
          placeholder="試合出場人数(9)"
        />
      </li>
      <li v-if="pNum >= 5" class="matchListOne">
        <a class="matchButton" v-on:click="shiftMemberPage('newMatch')"
          >試合を記録</a
        >
      </li>
      <li v-if="pNum < 5" class="matchListOne">
        <a class="matchButton" v-on:click="alertInput">試合を記録</a>
      </li>
      <li class="matchListOne">
        <a class="matchButton" v-on:click="shiftMemberPage('allMatch')"
          >過去の試合</a
        >
      </li>
    </ul>
    <hr class="hrInMatch" />
    <newmatch v-if="matchWord === 'newMatch' && pNum >= 5" v-bind:pNum="pNum" />
    <allmatch v-if="matchWord === 'allMatch'" />
  </div>
</template>

<script>
import newMatch from "./NewMatch";
import allMatch from "./AllMatch";
export default {
  components: {
    newmatch: newMatch,
    allmatch: allMatch
  },
  data: () => ({
    matchWord: "allMatch",
    pNum: ""
  }),
  methods: {
    shiftMemberPage(w) {
      this.matchWord = w;
    },
    alertInput() {
      alert("試合出場人数5人以上で試合を記録できます。");
    }
  }
};
</script>

<style lang="scss">
.secondMenuInMatch {
  float: left;
  margin-top: 3.2vh;
  margin-left: 3%;
  font-family: serif;
}
.matchButton {
  display: inline-block;
  width: 100px;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: hsl(155, 100%, 28%);
  border-bottom: 4px solid hsl(155, 80%, 14%);
  border-radius: 10px;
  transition: 0s;
}
.matchButton:hover {
  cursor: pointer;
  text-decoration: none;
  background: hsl(155, 80%, 14%);
  transform: translate3d(0, 4px, 0);
  transition: 0s;
  border-bottom: none;
}
.matchUl {
  width: 100%;
  list-style: none;
  margin-left: 550px;
}
.matchListOne {
  float: left;
  margin-left: 5%;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
.matchListTwo {
  float: left;
  margin-left: 1%;
  margin-top: 4.4vh;
  margin-bottom: 3vh;
}
.matchInput {
  margin-left: 5%;
}
.hrInMatch {
  clear: both;
}
</style>
