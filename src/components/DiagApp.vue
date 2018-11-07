<template>
  <div>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      width="400"
    >
      <gejala-list @selection-change="onSelectionChange"/>
    </v-navigation-drawer>
    <diagnose :gejala-ids="gejalaIds"/>
  </div>
</template>

<script>
import GejalaList from '@/components/GejalaList'
import Diagnose from '@/components/Diagnose'

export default {
  components: {
    GejalaList,
    Diagnose
  },
  data () {
    return {
      gejalaIds: [],
      miniVariant: false,
      clipped: true,
      drawer: true
    }
  },
  methods: {
    onSelectionChange (gejalaIds) {
      this.gejalaIds = gejalaIds
    }
  }
}
</script>

<style>

</style>
