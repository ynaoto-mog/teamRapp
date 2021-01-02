<template>
  <div>
    <h3>メンバー一覧</h3>
    <ul v-for="member in members" :key="member.id">
      <li>
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
    const memberData = await firestore.collection("members").get();
    memberData.docs.forEach(doc => {
      this.members.push({
        id: doc.id,
        ...doc.data()
      });
    });
  }
};
</script>

<style></style>
