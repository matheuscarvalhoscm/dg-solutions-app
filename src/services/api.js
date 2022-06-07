import axios from 'axios';

const fetchRegisters = async () => {
  const { data } = await axios.get('http://localhost:3003/');
  return data;
};

export default fetchRegisters;

