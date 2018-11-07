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
            v-bind:value="item.selected"
            @change="onSelectionChange(item.id, item.selected)"
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
export default {
  name: 'GejalaList',
  props: ['items', 'state'],
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    filtered () {
      return this.items.filter(it => it.name.includes(this.keyword))
    }
  },
  methods: {
    onSelectionChange (id, val) {
      this.$emit('selection-change', {id, val})
    },
    onSelectionClear (ev) {
      this.$emit('selection-clear')
    }
  }
}
</script>

<style>

</style>
