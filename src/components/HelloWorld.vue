<template>
<div>
  <h1>{{ msg }}</h1>
  Compteur : {{ $store.state.counter }}
</div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style></style>
