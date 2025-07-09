import axios from 'axios';
const API = 'http://localhost:5000/api/users';

const createUser = async () => {
  const res = await axios.post(API, {
    name: 'Abas',
  });
  console.log(res.data);
};
