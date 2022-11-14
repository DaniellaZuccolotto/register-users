import axios from 'axios';

const updateUser = async (id, user) => {
  try {
    const URL = `https://register-users-production.up.railway.app/${id}`;
    const response = await axios.put(URL, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default updateUser;