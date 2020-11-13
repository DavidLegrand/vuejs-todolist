<template>
  <fieldset>
    <form @submit.prevent="addtask">
      <label>
        <h3>Ajouter une nouvelle tâche :</h3>
      </label>
      <input type="text" v-model="newtask" />
      <button type="submit">+</button>
    </form>
  </fieldset>
</template>

<script>
export default {
  props: ['newtask', 'todolist'],
  methods: {
    addtask () {
      const task = { id: 0, name: this.newtask, done: false }
      this.todolist.push(task)
      this.newtask = ''
    }
  }
}
</script>

<style>
</style>
