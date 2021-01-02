<template>
  <div class="match">
    <ul>
      <p>
        試合に出場した人数を入力(代打も含む) 5人以上に設定すると登録ボタン出現
      </p>
      <p v-if="matchWord !== 'newMatch'">
        <input type="number" v-model="pNum" placeholder="試合出場人数(9)" />
      </p>
      <li v-if="pNum >= 5">
        <a v-on:click="shiftMemberPage('newMatch')">試合を記録</a>
      </li>
      <li>
        <a v-on:click="shiftMemberPage('allMatch')">過去の試合</a>
      </li>
    </ul>
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
    pNum: 0
  }),
  methods: {
    shiftMemberPage(w) {
      this.matchWord = w;
    }
  }
};
</script>

<style></style>
