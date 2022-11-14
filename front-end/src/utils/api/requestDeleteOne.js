import axios from 'axios';

const requestDeleteOne = async (id) => {
  try {
    const URL = `https://register-users-production.up.railway.app/${id}`;
    const response = await axios.delete(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default requestDeleteOne;