import axios from 'axios';

//API base url
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

//Bridging the gap betweem backend and frontend
export const getTask = () => API.get('/tasks');
export const createTask = task => API.post('/tasks', task);
export const updateTask = (id, task) => API.put(`/tasks/${id}`, task);
export const deleteTask = id => API.delete(`/tasks/${id}`);
