<template>
  <div class="inputs-container">
    <h1>DG Solutions Challenge</h1>
    <form>
      <label for="name-input">Nome completo</label>
      <input type="text" name="name-input" v-model="name" id="name-input"/>
      <label for="birth-date-input">Data de nascimento</label>
      <input type="date" name="birth-date-input" v-model="birthDate" id="birth-date-input"/>
      <label for="email-input">Email</label>
      <input type="email" name="email-input" v-model="email" id="email-input" />
      <label for="tel-input">Telefone</label>
      <input type="tel" name="tel-input" v-model="tel" id="tel-input" pattern="[0-9]{2}[9]{1}[0-9]{8}" />
      <!-- atributo pattern: inside the square brackets go the numbers allowed and inside the braces the total numbers allowed -->
    </form>
    <button @click="handleSubmit">Registrar</button>
  </div>
</template>
  
<script>
import { addRegister } from '../services/api';

export default {
  name: 'InputsContainer',
  data() {
    return {
      name: '',
      birthDate: '',
      email: '',
      tel: '',
    }
  },
  methods: {
    handleSubmit() {
      addRegister(this.name, this.birthDate, this.email, this.tel);
    }
  }
}
</script>

<style scoped>
.inputs-container {
  max-height: 19em;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgb(199, 199, 199);
  margin: 1em;
  width: 90%;
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
