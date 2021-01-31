<template>
  <div>
    <gmap v-bind:position="position" />
  </div>
</template>

<script>
import Gmap from "./GMap.vue";
export default {
  conponents: {
    gmap: Gmap
  },
  data: () => ({
    position: new Object()
  }),
  methods: {
    selectPosition(lat, lng) {
      this.position = {
        lat: lat,
        lng: lng
      };
    }
  }
};
</script>

<style></style>
