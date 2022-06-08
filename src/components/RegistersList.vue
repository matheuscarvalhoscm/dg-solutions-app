<template>
<section class="register-table">
  <h1>Registros</h1>
  <table>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
    <tr v-for="register in registerList" :key="register.id">
      <td>{{ register.name }}</td>
      <td>{{ register.age }}</td>
    </tr>
  </table>
</section>
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

const getRegisterList = async () => {
  const registers = await fetchRegisters();
  return registers.map(serializeAge);
}

export default {
  name: 'RegistersList',
  data() {
    return {
      registerList: [],
    };
  },
  async mounted() {
    this.registerList = await getRegisterList();
  },
  async updated(){
   this.registerList = await getRegisterList();
  }
};
</script>

<style scoped>
.register-table {
  padding: 1em;
  border-radius: 10px;
  box-shadow: 1px 1px 4px rgb(199, 199, 199);
  margin-left: 1em;
  width: 90%;
  text-align: center;
}

table {
  border-radius: 10px;
  text-align: left;
  width: 100%;
  margin: auto;
  height: auto;
}

td,
th {
  border: 1px solid rgb(219, 219, 219);
  border-radius: 5px;
  padding: 10px 5px;
}

th {
  background-color: rgb(219, 219, 219);
}

</style>
