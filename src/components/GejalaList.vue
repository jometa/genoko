<template>
  <div>
    <v-toolbar>
      <v-text-field
        color="pink"
        height="24px"
        placeholder="Keyword gejala"
      >
      </v-text-field>
    </v-toolbar>
    <v-list three-line>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-tile-action>
          <v-checkbox
            v-model="item.selected"
            color="red darken-2"
          />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-sub-title v-text="item.name"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import Services from '@/services'

export default {
  name: 'GejalaList',
  data () {
    return {
      state: 'idle',
      items: []
    }
  },
  methods: {
    reload () {
      this.state = 'loading'
      Services.getGejala()
        .then(items => {
          this.items = items.map(it => {
            it.selected = false
            return it
          })
          this.state = 'idle'
        })
        .catch(err => {
          console.log(err)
          this.state = 'error'
        })
    }
  },
  mounted () {
    this.reload()
  }
}
</script>

<style>

</style>
