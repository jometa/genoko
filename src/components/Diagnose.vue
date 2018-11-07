<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title color="red darken-1" class="body-2 font-weight-bold">{{ totalGejala }} Gejala</v-toolbar-title>
      <v-spacer/>
      <v-btn flat small color="red darken-1">
        Waktu
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: ['gejalaIds'],
  computed: {
    totalGejala () {
      return this.gejalaIds.length
    }
  }
}
</script>

<style>

</style>
