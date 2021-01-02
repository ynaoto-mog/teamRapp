<template>
  <div class="select">
    <ul>
      <li><a v-on:click="changePart('members')">メンバー</a></li>
      <li><a v-on:click="changePart('matches')">試合</a></li>
    </ul>
    <member v-if="partName === 'members'" />
    <match v-if="partName === 'matches'" />
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

<style></style>
