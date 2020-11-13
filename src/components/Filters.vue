<template>
  <fieldset>
    <h3>Filtrer les tâches :</h3>
    <select v-model="childselected" @change="emitselect">
      <option :selected="childselected" :key="i" v-for="(filter,i) in filters" :value="filter.done">{{filter.name}}</option>
    </select>
  </fieldset>
</template>

<script>
export default {
  props: ['filters', 'selected'],
  data: function () {
    return {
      childselected: this.selected
    }
  },
  methods: {
    emitselect () {
      this.$emit('selected', this.childselected)
    }
  }
}
</script>

<style>
</style>
