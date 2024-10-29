import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ name: string; email: string }>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout(state) {
      state.name = '';
      state.email = '';
    },
    register(state, action: PayloadAction<{ name: string; email: string }>) {
      state.name = action.payload.name; // This can also be set to a default or temporary value
      state.email = action.payload.email;
    },
  },
});

// Export actions
export const { login, logout, register } = userSlice.actions; // Include register in the exports
export default userSlice.reducer;
