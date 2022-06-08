<template>
  <table class="register-table">
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
    <tr v-for="register in registerList" :key="register.id">
      <td>{{ register.name }}</td>
      <td>{{ register.age }}</td>
    </tr>
  </table>
</template>

<script>
  import { fetchRegisters } from '../services/api';

  const serializeAge = (data) => {
    const year = new Date().getFullYear();
    return {
      id: data.id,
      name: data.name,
      age: year - parseInt(data.birthDate),
    }
  };

  export default {
    name: 'RegistersList',
    data() {
      return {
        registerList: [],
      };
    },
    async mounted() {
      const registers = await fetchRegisters();
      this.registerList = registers.map(serializeAge);
    },
    async updated(){
      const registers = await fetchRegisters();
      this.registerList = registers.map(serializeAge);
    }
  };
</script>
