<template>
  <div class="allMember">
    <p class="allMemberTitle"><span>All</span> Member</p>
    <p class="allMemberSubTitle">(数字は入学年度)</p>
    <loading v-if="loadingJudge === true" />
    <ul v-for="member in members" :key="member.id">
      <li class="allMemberList">
        <p>{{ member.admission }}</p>
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
    this.admissionYear = this.members[0].admission;
    console.log(this.admissionYear);
  }
};
</script>

<style lang="scss">
.allMember {
  margin-left: 175.41px + 80px;
  text-align: center;
}
.allMemberTitle {
  font-size: 1.5rem;
  padding-top: 5vh;
  letter-spacing: 3px;
  span {
    color: #ca0c0c;
  }
}
.allMemberSubTitle {
  margin-bottom: 4vh;
  font-size: 0.6rem;
}
.allMemberList {
  list-style: none;
  margin-top: 2vh;
}
.printAdmissionYear {
  margin-bottom: 10px;
  margin-top: 40px;
  span {
    color: #ca0c0c;
  }
}
</style>
