<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title color="red darken-1" class="body-2 font-weight-bold">{{ totalGejala }} Gejala</v-toolbar-title>
      <v-spacer/>
      <v-btn flat small color="red darken-1">
        Waktu
      </v-btn>
    </v-toolbar>

    <loading-view v-if="state == 'loading'"/>
    <error-view v-if="state == 'error'" message="Gagal melakukan diagnosa"
      @reload="state = 'idle'"/>
    <v-container fluid v-if="state == 'idle'">
      We are okay!!
    </v-container>
  </div>
</template>

<script>
import LoadingView from '@/components/commons/LoadingView'
import SuccessView from '@/components/commons/SuccessView'
import ErrorView from '@/components/commons/ErrorView'

export default {
  props: ['gejalaIds', 'state'],
  components: {
    LoadingView,
    SuccessView,
    ErrorView
  },
  computed: {
    totalGejala () {
      return this.gejalaIds.length
    }
  }
}
</script>

<style>

</style>
