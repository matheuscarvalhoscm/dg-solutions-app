<template>
  <div class="inputs-container">
    <h1>DG Solutions Challenge</h1>
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

<style scoped>
.inputs-container {
  padding: 1em;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgb(199, 199, 199);
  margin-left: 2em;
}

label,
input {
  display: block;
}

label {
  margin: 0.7em 0;
}

input {
  padding: 0.5em;
  border-style: none;
  border: 3px solid rgb(228, 228, 248);
  border-radius: 5px;
  transition: 0.5s;
}

input:focus {
  border: 3px solid rgba(0, 50,111,255);
  outline: none;
}

input[type="text"] {
  width: 80%;
}

button {
  background-color: rgb(48,88,148);
  border-radius: 5px;
  border: none;
  color:  rgb(241, 241, 248);
  cursor: pointer;
  margin-top: 1em;
  padding: 1em;
  transition: 0.5s;
}

button:hover {
  background-color: rgba(0,50,111,255)
}

</style>
