import axios from 'axios';

const fetchRegisters = async () => {
  const { data } = await axios.get('http://localhost:3003/');
  return data;
};

const addRegister = async (name, birthDate) => {
  try {
    await axios.post('http://localhost:3003/', { name, birthDate });
  } catch(error) {
    const { data: message  } = error.response;
    global.alert(message);
  }
};

export { fetchRegisters, addRegister };

