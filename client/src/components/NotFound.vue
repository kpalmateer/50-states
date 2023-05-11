<template>
  <div>
    <h2>Page not found</h2>

    <div id="go-home-link">
      <!-- create a router-link to the StateList component page -->
      Would you like to <router-link v-bind:to=" { name: 'StateList' } ">go to the home page?</router-link>
    </div>
    <br>

  </div>

</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

#go-home-link {
  padding: 1rem;
}

</style>