import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 11000,
});

export async function getOptionPriceApi() {
  try {
    const response = await axios.get('/option-price');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
