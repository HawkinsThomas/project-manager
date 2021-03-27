import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SERVER } from 'constants.js';


export const fetchClientsById = createAsyncThunk(
  'clients/fetchClientsStatus',
  async (userID) => {
    const response = await fetch(`${SERVER}/clients?userID=${userID}`);
    return response.json();
  },
);

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    entities: [],
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [fetchClientsById.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
  },
});

export default clientsSlice.reducer;
