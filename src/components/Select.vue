<template>
  <div class="select">
    <header class="selectHeader">
      <p class="RInselect" @click="recoverTop">Team-<span>R</span></p>
      <ul class="selectList">
        <li class="selectListItem" v-on:click="changePart('members')">
          <span class="selectItemSpan">Members</span>
        </li>
        <li class="selectListItem" v-on:click="changePart('matches')">
          <span class="selectItemSpan">Matches</span>
        </li>
        <li class="selectListItem" v-on:click="changePart('gmap')">
          <span class="selectItemSpan">Stadiums</span>
        </li>
      </ul>
    </header>
    <hr />
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
    },
    recoverTop() {
      this.$emit("recoverTop");
    }
  }
};
</script>

<style lang="scss">
.select {
  width: 100%;
  min-height: 100vh;
  background-color: #27222225;
}
.selectHeader {
  height: 15vh;
}
.RInselect {
  font-size: 1.7rem;
  line-height: 15vh;
  letter-spacing: 7px;
  margin-left: 80px;
  float: left;
  margin-right: 10%;
  cursor: hand;
  cursor: pointer;
  span {
    color: #ca0c0c;
  }
}
.selectListItem {
  line-height: 15vh;
  list-style: none;
  float: left;
  margin-left: 8%;
}
.selectItemSpan {
  border-bottom: solid black 1px;
  transition-property: color;
  transition-duration: 0.3s;
  letter-spacing: 1px;
}
.selectItemSpan:hover {
  color: #ca0c0c;
  cursor: hand;
  cursor: pointer;
}
.memberInSelect {
  clear: both;
}
</style>
