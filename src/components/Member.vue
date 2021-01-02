<template>
  <div class="members">
    <ul>
      <li><a v-on:click="changeMPage('allmember')">メンバー一覧</a></li>
      <li><a v-on:click="changeMPage('newmember')">メンバー追加</a></li>
    </ul>
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

<style></style>
