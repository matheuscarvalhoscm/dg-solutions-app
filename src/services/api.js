import axios from 'axios';

const fetchRegisters = async () => {
  const { data } = await axios.get('http://localhost:3003/');
  return data;
};

const addRegister = async (name, birthDate) => {
  axios.post('http://localhost:3003/', { name, birthDate });
};

export { fetchRegisters, addRegister };

