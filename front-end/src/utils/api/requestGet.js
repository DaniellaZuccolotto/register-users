import axios from 'axios';

const getUsers = async () => {
  try {
    const URL = 'http://localhost:3001/users';
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;