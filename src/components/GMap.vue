<template>
  <div>
    <div class="map" ref="googleMap" />
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  name: "Map",
  data() {
    return {
      google: null,
      mapConfig: {
        center: {
          lat: 33.5969523,
          lng: 130.223689
        },
        zoom: 12
      }
    };
  },
  async mounted() {
    this.google = await GoogleMapsApiLoader({
      apiKey: "AIzaSyDQ1r_HLfhFE2k3H3GgnG_3wK26HP0oEUs"
    });
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100vw;
  height: 100vh;
}
</style>
