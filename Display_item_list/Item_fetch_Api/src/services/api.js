import axios from 'axios';

const API_URL = 'https://fakestoreapi.in/api/products';

export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data && response.data.products) {
      return response.data.products; // Return only the products array
    } else {
      throw new Error('Unexpected API response structure');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; // Return an empty array on error to avoid breaking the app
  }
};
