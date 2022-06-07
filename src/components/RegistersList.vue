<template>
  <table class="register-table">
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
    <tr v-for="register in registerList" :key="register.id">
      <td>{{ register.name }}</td>
      <td>{{ register.birthDate }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'RegistersList',
  data() {
    return {
      registerList: [],
    };
  },
};
</script>
