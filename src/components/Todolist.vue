<template>
  <fieldset>
    <div class="todolist" :key="task.id" v-for="task in filteredlist">
      <input type="checkbox" :checked="task.done" @change="task.done = !task.done" />
      <h3 :class="task.done && 'done'">{{task.name}}</h3>
      <button @click="deletetask(task)">X</button>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: ['filteredlist', 'deletetask']
}
</script>

<style>
</style>
