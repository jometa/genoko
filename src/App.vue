<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      width="400"
    >
      <gejala-list/>
    </v-navigation-drawer>
    <v-toolbar
      app
      flat
      class="elevation-1"
    >
      <v-toolbar-items>
        <v-btn small flat ripple>
          App
        </v-btn>
        <v-btn small flat>
          Rekam Medik
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn color="primary">Save</v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import GejalaList from '@/components/GejalaList'

export default {
  components: {
    GejalaList
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Genoko.IO'
    }
  },
  name: 'App'
}
</script>
