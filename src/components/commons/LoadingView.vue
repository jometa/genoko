<template>
  <v-container
    fluid
    style="min-height: 100vh;"
    fill-height
    class="white"
  >
    <v-layout row wrap justify-center align-center fill-height>
       <v-progress-circular
        :size="120"
        width="8"
        color="blue accent-3"
        indeterminate
      ></v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>

</style>
