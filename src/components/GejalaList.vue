<template>
  <div>
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
        v-for="(item, i) in filtered"
        :key="i"
      >
        <v-list-tile-action>
          <v-checkbox
            v-model="item.selected"
            @change="onSelectionChange"
            color="red darken-2"
          />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-sub-title v-bind:class="{ 'font-weight-bold': item.selected }" v-text="item.name"></v-list-tile-sub-title>
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
      items: [],
      keyword: ''
    }
  },
  computed: {
    filtered () {
      return this.items.filter(it => it.name.includes(this.keyword))
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
    },
    onSelectionChange (ev) {
      this.$emit('selection-change', this.items.filter(it => it.selected).map(it => it.id))
    },
    onSelectionClear (ev) {
      this.items.forEach(it => {
        it.selected = false
      })
      // Emit change selection with empty result
      this.$emit('selection-change', [])
    }
  },
  mounted () {
    this.reload()
  }
}
</script>

<style>

</style>
