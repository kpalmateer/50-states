<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state.</p>
    <p v-else>You haven't visited this state.</p>

    <!-- use v-if to only show the map once it's ready -->
    <div id="map-container" v-if="dataReady">
      <!-- setting the ref attribute allows you to pass this map to methods -->
      <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors">
        </l-tile-layer>
      </l-map>
    </div>

  </div>
</template>

<script>
import { LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
  name: "StateMap",
  components: {
    LMap, LTileLayer
  },
  data() {
    return {
      state: {},
      dataReady: false,
      mapReady: false
    }
  },
  mounted() {
    // pull the state name from the param in index.js
    this.state.name = this.$route.params.state
    this.fetchStateData()
  },
  methods: {
    // call the function created in stateService
    fetchStateData() {
      this.$stateService.getOneState(this.state.name).then( state => {
        // set the "state" data to be the api response
        this.state = state
        this.dataReady = true
      }).catch( err => {
        // deal with 404 errors
        if ( err.response && err.response.status === 404 ) {
          // redirect to the NotFound component page
          this.$router.push({ name: 'NotFound' })
        } else {
          alert('Sorry - error fetching data about the state')
          console.error(err)
        }
      })
    },
    onMapReady() {
      this.mapReady = true
    },
    setMapView() {
      if (this.mapReady && this.dataReady) {
        // when the map and data are ready, set the center and zoom of the map container
        this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
      }
    }
  },
  computed: {
    mapCenter() {
      return [ this.state.lat, this.state.lon ]
    }
  }
}
</script>

<style scoped>

#map-container {
  height: 30rem;
}

</style>