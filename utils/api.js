import axios from 'axios';

const apiClient = axios.create({
  baseURL:'https://api.socialverseapp.com/admin/dashboard',
});

export const fetchDashboardData = async () => {
  const { data } = await apiClient.get('/');
  return data;
};

export const fetchUsers = async () => {
  const { data } = await apiClient.get('/users');
  return data;
};

// Add more functions as needed
