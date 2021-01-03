<template>
  <div class="memberdetail">
    安打数{{ getOwnResult(name).hits }}打数{{ getOwnResult(name).times }}打率{{
      getOwnResult(name).rate
    }}
  </div>
</template>

<script>
import firebase from "../firebase.js";
const firestore = firebase.firestore();
export default {
  props: {
    name: String
  },
  name: "memberdetail",
  data: () => ({
    allResults: [],
    ownResults: []
  }),
  methods: {
    getOwnResult(name) {
      let times = 0;
      let hits = 0;
      this.allResults.forEach(item => {
        const orderNum = item.members.indexOf(name);
        times += parseInt(item.times[parseInt(orderNum)]);
        hits += parseInt(item.hits[parseInt(orderNum)]);
      });
      const ownAllResults = {
        hits: hits,
        times: times,
        rate: hits / times
      };
      return ownAllResults;
    }
  },
  async created() {
    const resultData = await firestore.collection("results").get(); //全ての成績を取得
    resultData.docs.forEach(doc => {
      this.allResults.push({
        id: doc.id,
        ...doc.data()
      }); //this.allResultsに成績格納
    });
  }
};
</script>
