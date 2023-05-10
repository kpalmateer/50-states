<template>

  <div>
    <!-- use v-bind to send states array to StateSummary -->
    <state-summary v-bind:states=states></state-summary>
  </div>

  <div class="state-list-container">
    <!-- display the data on the page -->
    <div class="state-container" v-for="state in states" v-bind:key="state.name">
      <!-- bind the state in the v-for loop to the state prop in StateDetail -->
      <state-detail
          v-bind:state="state"
          v-on:update-visited="updateVisited">
      </state-detail>
    </div>

  </div>
</template>

<script>
import StateDetail from "@/components/StateDetail.vue";
import StateSummary from "@/components/StateSummary.vue";

export default {
  name: "StateList",
  components: {
    StateDetail,
    StateSummary
  },
  data() {
    return {
      states: []
    }
  },
  mounted() {
    // call the method
    this.fetchAllStates()
  },
  methods: {
    // this function will set the data in this component to whatever is returned from stateService
    fetchAllStates() {
      this.$stateService.getAllStates().then( states => {
        this.states = states
      })
          .catch( err => {
            alert('Sorry, can\'t fetch state list')
            console.error(err)
          })
    },
    updateVisited(stateName, visited) {
      // call the setVisited function in stateService and send the state name and visited status
      this.$stateService.setVisited(stateName, visited).then( () => {
        // refresh the state list
        this.fetchAllStates()
      })
          .catch( err => {
            alert('Sorry, can\'t update state')
            console.error(err)
          })
    }
  }
}

</script>

<style scoped>

.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.state-container {
  margin: 1rem;
}
</style>