import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const data = await response.json();
  return data.results;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
