<template>
  <div>
    <div class="map" ref="googleMap">
      <GmapMarker :key="index" :position="position" />
    </div>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  name: "Map",
  props: {
    position: Object
  },
  data: () => ({
    google: null,
    marker: null,
    mapConfig: {
      center: {
        lat: 33.5969523,
        lng: 130.223689
      },
      zoom: 12
    }
  }),
  async mounted() {
    this.google = await GoogleMapsApiLoader({
      apiKey: process.env.VUE_APP_API_KEY
    });
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const map = new this.google.maps.Map(
        this.$refs.googleMap,
        this.mapConfig
      );
      this.marker = new this.google.maps.Marker({
        position: this.position,
        map: map
      });
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
