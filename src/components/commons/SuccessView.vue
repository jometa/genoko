<template>
  <v-container
    fluid
    style="padding-top: 120px;"
  >
    <v-layout row justify-center align-center>
      <font-awesome-icon icon="paper-plane" size="8x" class="blue--text"></font-awesome-icon>
    </v-layout>
    <v-layout row justify-center align-center class="my-4">
      <div class="title">{{ message }}</div>
    </v-layout>
    <v-layout row justify-center align-center>
      <v-btn
        v-for="(act, i) in actions" :key="i"
        class="blue lighten-1" dark @click="act.doIt">
        {{ act.name }}
      </v-btn>
    </v-layout>
  </v-container>  
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>

</style>
