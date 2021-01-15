<template>
  <div class="select">
    <h1 class="RInselect">team<span>R</span></h1>
    <ul class="selectList">
      <li class="selectListOne">
        <a class="selectButton" v-on:click="changePart('members')">メンバー</a>
      </li>
      <li class="selectListOne">
        <a class="selectButton" v-on:click="changePart('matches')">試合</a>
      </li>
      <li class="selectListOne">
        <a class="selectButton" v-on:click="changePart('gmap')">試合会場</a>
      </li>
    </ul>
    <hr class="hrInSelect" />
    <member class="memberInSelect" v-if="partName === 'members'" />
    <match class="matchInSelect" v-if="partName === 'matches'" />
    <gmap v-if="partName === 'gmap'" />
  </div>
</template>

<script>
import Member from "./Member.vue";
import Match from "./Match.vue";
import GMap from "./GMap.vue";
export default {
  name: "selecting",
  components: {
    member: Member,
    match: Match,
    gmap: GMap
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
  min-height: 100vh;
  background-color: #ffc547;
}
.RInselect {
  margin-left: 5%;
  margin-top: 3vh;
  margin-right: 330px;
  font-family: serif;
  float: left;
  span {
    color: #ca0c0c;
  }
}
.selectButton {
  display: inline-block;
  width: 100px;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: #ca0c0c;
  border-bottom: 4px solid #910000;
  border-radius: 10px;
  transition: 0s;
}
.selectButton:hover {
  cursor: pointer;
  text-decoration: none;
  background: #910000;
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
