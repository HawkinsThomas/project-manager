import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sources from 'api/sources';


export const fetchInvoicesById = createAsyncThunk(
  'invoices/fetchInvoicesById',
  async (userID) => {
    const response = await sources.invoiceList.get(userID);
    return response.json();
  },
);

export const addInvoice = createAsyncThunk(
  'invoices/addinvoice',
  async (data) => {
    const response = await sources.invoiceList.post(data);
    return response;
  },
);

export const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: {
    entities: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchInvoicesById.pending]: (state) => {
      state.loading = true;
    },
    [fetchInvoicesById.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchInvoicesById.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [addInvoice.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

export default invoicesSlice.reducer;
