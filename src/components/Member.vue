<template>
  <div class="members">
    <div class="membersBar">
      <ul class="memberUl">
        <li class="memberListItem" v-on:click="changeMPage('allmember')">
          <span class="memberButton">All Members</span>
        </li>
        <li class="memberListItem" v-on:click="changeMPage('newmember')">
          <span class="memberButton">Add Member</span>
        </li>
      </ul>
    </div>
    <allmember v-if="mPageWord === 'allmember'" />
    <newmember v-if="mPageWord === 'newmember'" />
  </div>
</template>

<script>
import AllMember from "./AllMember";
import NewMember from "./NewMember";
export default {
  components: {
    allmember: AllMember,
    newmember: NewMember
  },
  data: () => ({
    members: [],
    mPageWord: "allmember"
  }),
  methods: {
    changeMPage(w) {
      this.mPageWord = w;
    }
  }
};
</script>

<style lang="scss">
.members {
  min-height: 85vh;
}
.membersBar {
  margin-left: 80px;
  padding-right: 80px;
  border-right: solid 1px rgba(0, 0, 0, 0.397);
  height: 85vh;
  float: left;
}
.memberUl {
  width: 100%;
  list-style: none;
}
.memberListItem {
  margin-top: 8vh;
  letter-spacing: 0.6px;
}
.memberButton {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-bottom: solid black 1px;
  transition-property: color;
  transition-duration: 0.2s;
}
.memberButton:hover {
  cursor: pointer;
  color: #ca0c0c;
}
</style>
