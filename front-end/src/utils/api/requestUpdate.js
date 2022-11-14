import axios from 'axios';

const updateUser = async (id, user) => {
  try {
    const URL = `http://localhost:3001/users/${id}`;
    const response = await axios.put(URL, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default updateUser;