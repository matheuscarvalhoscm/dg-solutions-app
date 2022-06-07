<template>
  <div id="app">
    <InputsContainer />
    <RegistersList />
  </div>
</template>

<script>
import InputsContainer from './components/InputsContainer.vue';
import RegistersList from './components/RegistersList.vue';

export default {
  name: 'App',
  components: {
    InputsContainer,
    RegistersList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
