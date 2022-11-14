import axios from 'axios';

const createUser = async (user) => {
  try {
    const URL = 'http://localhost:3001/users';
    const response = await axios.post(URL, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default createUser;