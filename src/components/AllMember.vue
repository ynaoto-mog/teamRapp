<template>
  <div class="allMember">
    <h2 class="allMemberH2">メンバー一覧</h2>
    <ul v-for="member in members" :key="member.id">
      <li class="allMemberList">
        <a v-on:click="openMemberModal(member.name)">{{ member.name }}</a>
        <memberdetail
          v-if="memberModalJudge === member.name"
          v-bind:name="member.name"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "../firebase.js";
const firestore = firebase.firestore();
import MemberDetail from "./MemberDetail.vue";
export default {
  components: {
    memberdetail: MemberDetail
  },
  data: () => ({
    members: [],
    results: [],
    memberModalJudge: ""
  }),
  methods: {
    openMemberModal(name) {
      if (this.memberModalJudge !== name) {
        this.memberModalJudge = name;
      } else {
        this.memberModalJudge = "";
      }
    }
  },
  created: async function() {
    const memberData = await firestore.collection("members").get(); //メンバー全員のデータ取得
    memberData.docs.forEach(doc => {
      this.members.push({
        id: doc.id,
        ...doc.data()
      });
    });
  }
};
</script>

<style lang="scss">
.allMember {
  width: 100%;
  padding: 3vh 5%;
}
.allMemberH2 {
  margin-bottom: 3vh;
}
.allMemberList {
  list-style: none;
  margin-bottom: 2vh;
  font-weight: bold;
}
</style>
