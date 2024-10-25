import  axios from 'axios';

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/0f7eac0335ba48b6ae903fbc0a137fa3',
  headers:{
    'Content-Type': 'application/json',
  }
});


