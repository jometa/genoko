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
import Services from '@/services'

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
      drawer: true,
      state: 'idle'
    }
  },
  methods: {
    onSelectionChange (gejalaIds) {
      this.gejalaIds = gejalaIds
      this.diagnose(gejalaIds)
    },
    diagnose (gejalaIds) {
      if (gejalaIds.length === 0) {
        return
      }
      this.state = 'loading'
      Services.diagnose(gejalaIds)
        .then(result => {
          console.log(result)
          this.state = 'success'
        })
        .catch(err => {
          console.log(err)
          this.state = 'error'
        })
    }
  }
}
</script>

<style>

</style>
