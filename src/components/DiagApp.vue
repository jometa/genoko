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
      <v-toolbar color="white">
        <v-text-field
          color="pink"
          height="24px"
          placeholder="Keyword gejala"
          v-model="keyword"
        >
        </v-text-field>
        <v-btn flat color="red" small @click="onSelectionClear">
          Clear
        </v-btn>
      </v-toolbar>
      <v-list three-line>
        <v-list-tile
          value="true"
          v-for="(item, i) in filteredGejala"
          :key="i"
        >
          <v-list-tile-action>
            <v-checkbox
              v-bind:value="item.selected"
              @change="onSelectionChange(item.id, !item.selected)"
              color="red darken-2"
            />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-sub-title v-bind:class="{ 'font-weight-bold': item.selected }" v-text="item.name"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <diagnose 
      :gejala-ids="selectedGejala"
      :state="states.diagnose"/>
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
      states: {
        gejala: 'idle',
        diagnose: 'idle'
      },
      keyword: ''
    }
  },
  methods: {
    onSelectionChange (id, val) {
      let items = this.gejalaIds
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          items[i].selected = val
          break
        }
      }
      this.diagnose(this.selectedGejala)
    },
    diagnose (gejalaIds) {
      if (gejalaIds.length === 0) {
        this.states.diagnose = 'idle'
        return
      }
      this.states.diagnose = 'loading'
      Services.diagnose(gejalaIds)
        .then(result => {
          console.log(result)
          this.states.diagnose = 'success'
        })
        .catch(err => {
          console.log(err)
          this.states.diagnose = 'error'
        })
    },
    reload () {
      this.states.gejala = 'loading'
      Services.getGejala()
        .then(items => {
          this.gejalaIds = items.map(it => {
            it.selected = false
            return it
          })
          this.states.gejala = 'idle'
        })
        .catch(err => {
          console.log(err)
          this.states.gejala = 'error'
        })
    },
    onSelectionClear () {
      this.gejalaIds.forEach(it => {
        it.selected = false
      })
    }
  },
  computed: {
    selectedGejala () {
      return this.gejalaIds.filter(it => it.selected).map(it => it.id)
    },
    filteredGejala () {
      return this.gejalaIds.filter(it => it.name.includes(this.keyword))
    }
  },
  mounted () {
    this.reload()
  }
}
</script>

<style>

</style>
