<template>
  <div>

    <h2>You have visited these states: </h2>
    <div class="states-visited-list-container">
      <div class="states-visited-container" v-for="state in states" v-bind:key="state.name">
        {{ state.name }}
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "StatesVisited",
  data() {
    return {
      // an array to hold the state list
      states: []
    }
  },
  mounted() {
    // call the method when the component is mounted
    this.fetchVisitedStates()
  },
  methods: {
    // get the array of visited states from StateService
    fetchVisitedStates() {
      this.$stateService.getVisitedStates().then( states => {
        this.states = states
      })
          .catch( err => {
            alert('Sorry, we encountered a problem')
            console.error(err)
          })
    }
  }
}
</script>

<style scoped>

.states-visited-container {
  padding: 1rem;
  font-size: 1.5rem;
}

</style>