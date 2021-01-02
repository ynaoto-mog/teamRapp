<template>
  <div class="newMember">
    新規メンバー
    <p>氏名</p>
    <input type="text" placeholder="氏名" v-model="name" />
    <p>背番号</p>
    <input type="number" placeholder="背番号" v-model="uniformNumber" />
    <p>入学年</p>
    <input type="text" placeholder="20XX" v-model="admission" />
    <p>確認して登録ボタンを押してください。</p>
    <button v-on:click="saveMember">登録</button>
  </div>
</template>

<script>
import firebase from "../firebase.js";
const firestore = firebase.firestore();
export default {
  data: () => ({
    name: "",
    uniformNumber: null,
    admission: null
  }),
  methods: {
    async saveMember() {
      window.confirm("確認はしましたか？");
      if (
        this.admission >= 2000 &&
        this.name !== null &&
        this.uniformNumber !== null
      ) {
        const memberData = {
          name: this.name,
          uniformNumber: this.uniformNumber,
          admission: this.admission
        };
        try {
          await firestore.collection("members").add(memberData);
          alert("登録しました。");
          this.name = "";
          this.uniformNumber = "";
          this.admission = "";
        } catch (e) {
          alert("エラー発生、山路に報告を");
          console.log(e);
        }
      }
    }
  }
};
</script>

<style></style>
