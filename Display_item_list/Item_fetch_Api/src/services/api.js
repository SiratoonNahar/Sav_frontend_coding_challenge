import axios from 'axios';

const API_URL = 'https://fakestoreapi.in/api/products';

export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data && response.data.products) {
      return response.data.products; 
    } else {
      throw new Error('Unexpected API response structure');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
};
