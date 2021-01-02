<template>
  <div class="select">
    <ul class="selectList">
      <li class="selectListOne">
        <a class="selectButton" v-on:click="changePart('members')">メンバー</a>
      </li>
      <li class="selectListOne">
        <a class="selectButton" v-on:click="changePart('matches')">試合</a>
      </li>
    </ul>
    <hr class="hrInSelect" />
    <member class="memberInSelect" v-if="partName === 'members'" />
    <match class="matchInSelect" v-if="partName === 'matches'" />
  </div>
</template>

<script>
import Member from "./Member.vue";
import Match from "./Match.vue";
export default {
  name: "selecting",
  components: {
    member: Member,
    match: Match
  },
  data: () => ({
    partName: "members"
  }),
  methods: {
    changePart(partName) {
      this.partName = partName;
    }
  }
};
</script>

<style lang="scss">
.select {
  width: 100%;
  height: 100vh;
  background-color: #ffc547;
}
.selectButton {
  display: inline-block;
  width: 100px;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: #0c88ca;
  border-bottom: 4px solid #005691;
  border-radius: 10px;
  transition: 0s;
}
.selectButton:hover {
  cursor: pointer;
  text-decoration: none;
  background: #005691;
  transform: translate3d(0, 4px, 0);
  transition: 0s;
  border-bottom: none;
}
.selectList {
  width: 100%;
  list-style: none;
}
.selectListOne {
  float: left;
  margin-left: 5%;
  margin-top: 3vh;
  margin-bottom: 3vh;
}
.memberInSelect {
  clear: both;
}
.matchInSelect {
  clear: both;
}
.hrInSelect {
  clear: both;
}
</style>
