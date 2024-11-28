import axios from 'axios';
import { API_URL } from '../context/AuthContext';

export const getAllStones = async () => {
  const response = await axios.get(`${API_URL}/stone-read/api/stone`);
  return response.data;
};
