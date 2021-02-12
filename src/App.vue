<template>
  <div class="home">
    <div class="teamr-background" v-if="helloJudge">
      <header class="teamRAppHeader">
        <p id="teamRApp">Team-R</p>
        <nav class="teamRAppNav">
          <input
            type="text"
            class="appInput"
            v-model="helloPass"
            placeholder="password"
          />
          <a
            ><font-awesome-icon
              class="logInIcon"
              icon="door-open"
              v-on:click="closeHello"
          /></a>
        </nav>
      </header>
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
      } else {
        alert("パスワードを入力してください");
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
}
.teamr-background {
  font-family: "Oswald", sans-serif;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
}
.teamRAppHeader {
  height: 100px;
  background-color: rgba(0, 0, 0, 0.788);
}
#teamRApp {
  color: white;
  font-size: 1.7rem;
  line-height: 100px;
  float: left;
}
.teamRAppNav {
  line-height: 100px;
}
.appInput {
  outline: none;
  border: solid 0px;
  border-bottom: solid 1px white;
  background-color: rgba(0, 0, 0, 0.788);
  height: 40px;
  color: white;
  margin-right: 10px;
}
.logInIcon {
  zoom: 1.5;
  color: white;
}
@media screen and (min-width: 900px) {
  .teamr-background {
    background-image: url("./assets/baseball.jpg");
  }
  #teamRApp {
    margin-right: 45%;
    margin-left: 80px;
    letter-spacing: 5px;
  }
  .appInput {
    width: 200px;
    font-size: 1.1rem;
    letter-spacing: 5px;
  }
}
@media screen and (min-width: 480px) and (max-width: 900px) {
  .teamr-background {
    background-image: url("./assets/height.jpg");
  }
  #teamRApp {
    margin-right: 15%;
    margin-left: 20px;
    letter-spacing: 2px;
  }
  .appInput {
    width: 150px;
    font-size: 1rem;
  }
}
@media screen and (min-width: 0px) and (max-width: 480px) {
  .teamr-background {
    background-image: url("./assets/height.jpg");
  }
  #teamRApp {
    margin-right: 10%;
    margin-left: 20px;
    letter-spacing: 1px;
  }
  .appInput {
    width: 100px;
    font-size: 1rem;
  }
}
</style>
