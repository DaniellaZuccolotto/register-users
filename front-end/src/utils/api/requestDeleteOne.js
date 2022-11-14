import axios from 'axios';

const requestDeleteOne = async (id) => {
  try {
    const URL = `http://localhost:3001/users/${id}`;
    const response = await axios.delete(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default requestDeleteOne;