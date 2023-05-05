import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://644f91eab61a9f0c4d25c138.mockapi.io';

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/todos');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

export const addTodos = createAsyncThunk(
  'todos/addTodos',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/todos', newContact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);

export const deleteTodos = createAsyncThunk(
  'todos/deleteTodos',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/todos/${id}`);
      console.log(data);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue;
    }
  }
);
