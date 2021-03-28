import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sources from 'api/sources';


export const fetchProjectsById = createAsyncThunk(
  'projects/fetchClientsStatus',
  async (userID) => {
    const response = await sources.projectList.get(userID);
    return response.json();
  },
);

export const addProject = createAsyncThunk(
  'projects/addProject',
  async (data) => {
    const response = await sources.projectList.post(data);
    return response;
  },
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    entities: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchProjectsById.pending]: (state) => {
      state.loading = true;
    },
    [fetchProjectsById.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchProjectsById.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [addProject.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

export default projectsSlice.reducer;
