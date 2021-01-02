<template>
  <div class="home">
    <div class="teamrlogo" v-if="helloJudge">
      <div class="hello">
        <input
          type="text"
          class="appInput"
          v-model="helloPass"
          placeholder="password"
        /><br />
        <button class="appButton" v-on:click="closeHello">ログイン</button>
      </div>
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

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  font-family: "Oswald", sans-serif;
}

.teamrlogo {
  width: 100%;
  height: 100vh;
  text-align: center;
  background-size: cover;
  background-image: url("./assets/teamrlogo.png");
}

.appButton {
  display: inline-block;
  width: 130px;
  padding: 0.8em;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background: #0c88ca;
  border-bottom: 4px solid #005691;
  border-radius: 10px;
  transition: 0s;
}
.appButton:hover {
  cursor: pointer;
  text-decoration: none;
  background: #005691;
  transform: translate3d(0, 4px, 0);
  transition: 0s;
  border-bottom: none;
}
.appInput {
  margin-top: 50px;
  margin-bottom: 15px;
  padding: 20px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
}
</style>
