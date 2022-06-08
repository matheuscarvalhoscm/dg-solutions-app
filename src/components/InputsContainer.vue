<template>
  <div class="inputs-container">
    <h1>Formulário de inscrição</h1>
    <form>
      <label for="name-input">Nome completo</label>
      <input type="text" name="name-input" v-model="name" />
      <label for="birthdate-input">Data de Nascimento</label>
      <input type="date" name="birthdate-input" v-model="birthdate" />
    </form>
    <button v-on:click="handleSubmit">Registrar</button>
  </div>
</template>
  
<script>

  import { addRegister } from '../services/api';

  export default {
    name: 'InputsContainer',
    data() {
      return {
        name: '',
        birthdate: '',
      }
    },
    methods: {
      handleSubmit() {
        addRegister(this.name, this.birthdate);
      }
    }
  }
</script>