<template>
  <div class="members">
    <ul class="memberUl">
      <li class="memberListOne">
        <a class="memberButton" v-on:click="changeMPage('allmember')"
          >メンバー一覧</a
        >
      </li>
      <li class="memberListOne">
        <a class="memberButton" v-on:click="changeMPage('newmember')"
          >メンバー追加</a
        >
      </li>
    </ul>
    <hr class="hrInMember" />
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
.memberUl {
  width: 100%;
  list-style: none;
}
.hrInMember {
  clear: both;
}
.memberListOne {
  float: left;
  margin-left: 5%;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
.memberButton {
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
.memberButton:hover {
  cursor: pointer;
  text-decoration: none;
  background: hsl(155, 80%, 14%);
  transform: translate3d(0, 4px, 0);
  transition: 0s;
  border-bottom: none;
}
</style>
