<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-if="$route.params.name">Bienvenue {{ $route.params.name }}</div>
    <div v-if="$route.params.postid">Vous regardez le post numéro: {{ $route.params.postid }}</div>
    Compteur : {{$store.state.counter}}
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="increment">+15</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    increment () {
      this.$store.dispatch('a_increment', 1)
    },
    decrement () {
      this.$store.dispatch('a_increment', -1)
    }
  }
}
</script>
