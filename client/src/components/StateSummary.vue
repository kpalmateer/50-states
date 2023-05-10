<template>

  <div>
    <p>There are {{ states.length }} states, including DC.</p>
    <p>You have visited {{ totalVisited }} {{ units }}.</p>
    <!-- use v-if with the computed property areAllVisited to show a message if all 51 have been visited -->
    <p id="all-visited-message" v-if="areAllVisited">You have visited all states!</p>
  </div>

</template>

<script>
export default {
  name: "StateSummary",
  // this will be a child component, so we can use props
  // we won't use routing to access it
  props: {
    states: Array
  },
  computed: {
    totalVisited() {
      let visitedCount = 0
      this.states.forEach( state => {
        if (state.visited) {
          visitedCount++
        }
      })
      return visitedCount
    },
    units() {
      if (this.totalVisited === 1) {
        return 'state'
      } else {
        return 'states'
      }
    },
    areAllVisited() {
      return this.totalVisited === this.states.length
    }
  }
}
</script>

<style scoped>

#all-visited-message {
  color: forestgreen;
  font-weight: 600;
}

</style>