<template>
  <div class="allMember">
    <h2 class="allMemberH2">メンバー一覧(クリックで通算成績確認)</h2>
    <loading v-if="loadingJudge === true" />
    <ul v-for="member in members" :key="member.id">
      <li class="allMemberList">
        <p v-if="member.admission != admissionYear" class="printAdmissionYear">
          <span>{{ printAdmissionYear(member.admission) }}</span
          >年入学
        </p>
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
import Loading from "./Loading.vue";
export default {
  components: {
    memberdetail: MemberDetail,
    loading: Loading
  },
  data: () => ({
    members: [],
    results: [],
    memberModalJudge: "",
    admissionYear: 0,
    loadingJudge: true
  }),
  methods: {
    openMemberModal(name) {
      if (this.memberModalJudge !== name) {
        this.memberModalJudge = name;
      } else {
        this.memberModalJudge = "";
      }
    },
    printAdmissionYear(year) {
      this.admissionYear = year;
      return year;
    }
  },
  created: async function() {
    this.loadingJudge = true;
    const memberData = await firestore
      .collection("members")
      .orderBy("admission", "desc")
      .get(); //メンバー全員のデータ取得
    memberData.docs.forEach(doc => {
      this.members.push({
        id: doc.id,
        ...doc.data()
      });
    });
    this.loadingJudge = false;
  }
};
</script>

<style lang="scss">
.allMember {
  width: 100%;
  padding: 3vh 10%;
}
.allMemberH2 {
  margin-bottom: 3vh;
}
.allMemberList {
  list-style: none;
  margin-bottom: 2vh;
  font-weight: bold;
}
.printAdmissionYear {
  margin-bottom: 10px;
  margin-top: 40px;
  span {
    color: #ca0c0c;
  }
}
</style>
