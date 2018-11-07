<template>
  <v-container
    fluid
    style="padding-top: 120px;"
  >
    <v-layout row justify-center align-center>
      <font-awesome-icon icon="paper-plane" size="8x" class="red--text"></font-awesome-icon>
    </v-layout>
    <v-layout row justify-center align-center class="my-4">
      <div class="title">{{ message }}</div>
    </v-layout>
    <v-layout row justify-center align-center>
      <v-btn class="blue lighten-1" dark @click="$emit('reload')">
        reload!!
      </v-btn>
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
