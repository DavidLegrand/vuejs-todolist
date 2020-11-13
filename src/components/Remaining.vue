<template>
  <fieldset>
    <h3 v-if="taskCount===0">Félicitations, vous avez tout fini !</h3>
    <h3 v-else>Il vous reste {{ taskCount }} / {{ todolist.length }} tâches à faire</h3>
  </fieldset>
</template>

<script>
export default {
  props: ['taskCount', 'todolist']
}
</script>

<style>
</style>
