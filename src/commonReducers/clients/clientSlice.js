import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sources from 'api/sources';


export const fetchClientsById = createAsyncThunk(
  'clients/fetchClientsStatus',
  async (userID) => {
    const response = await sources.clientList.get(userID);
    return response.json();
  },
);

export const addClient = createAsyncThunk(
  'clients/getClients',
  async (data) => {
    const response = await sources.clientList.post(data);
    return response;
  },
);

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    entities: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchClientsById.pending]: (state) => {
      state.loading = true;
    },
    [fetchClientsById.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchClientsById.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [addClient.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

export default clientsSlice.reducer;
