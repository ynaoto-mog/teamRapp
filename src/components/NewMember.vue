<template>
  <div class="newMember">
    <h2>新規メンバー追加</h2>
    <p class="newMemberInput">氏名</p>
    <input type="text" placeholder="氏名" v-model="name" />
    <p class="newMemberInput">背番号</p>
    <input type="number" placeholder="背番号" v-model="uniformNumber" />
    <p class="newMemberInput">入学年</p>
    <input type="number" placeholder="20XX" v-model="admission" />
    <p class="newMemberConfirm">確認して登録ボタンを押してください。</p>
    <a class="newMemberButton" v-on:click="saveMember">登録</a>
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
          uniformNumber: Number(this.uniformNumber),
          admission: Number(this.admission)
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

<style lang="scss">
.newMember {
  width: 100%;
  padding: 3vh 10%;
}
.newMemberInput {
  margin-top: 3vh;
  font-size: 1.1rem;
}
.newMemberConfirm {
  margin-top: 3vh;
}
.newMemberButton {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(45deg, #ff7707 0%, #f74e0b 100%);
  transition: 0.4s;
}
.newMemberButton:hover {
  background-image: linear-gradient(45deg, #ff0707 0%, #f76a35 100%);
}
</style>
