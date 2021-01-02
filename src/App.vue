<template>
  <div class="home">
    <div class="hello" v-if="helloJudge">
      <input tyoe="text" v-model="helloPass" placeholder="password" />
      <button v-on:click="closeHello">ログイン</button>
    </div>
    <selectview v-if="helloJudge === false" />
  </div>
</template>

<script>
import Select from "./components/Select.vue";
export default {
  components: {
    selectview: Select
  },
  data: () => ({
    helloPass: "",
    helloJudge: true
  }),
  methods: {
    closeHello() {
      if (this.helloPass === "teamR") {
        alert("ログイン完了");
        this.helloJudge = false;
      }
    },
    confirmReload(event) {
      event.returnValue = "ログイン前まで処理が戻りますがよろしいですか？";
    }
  },
  created: function() {
    window.addEventListener("beforeunload", this.confirmReload);
  }
};
</script>
