<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state.</p>
    <p v-else>You haven't visited this state.</p>
  </div>
</template>

<script>
export default {
  name: "StateMap",
  data() {
    return {
      state: {

      }
    }
  },
  mounted() {
    // pull the state name from the param in index.js
    this.state.name = this.$route.params.state
  }
}
</script>

<style scoped>

</style>