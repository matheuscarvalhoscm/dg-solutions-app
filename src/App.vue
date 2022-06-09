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
@media screen and (max-width: 900px) {
  #app {
    width: 100%;
    margin: 0px;
    flex-wrap: wrap;
    align-items: center;
  }
}

#app {
  font-family: Ubuntu, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  width: 100%;
  margin: auto;
}
</style>
