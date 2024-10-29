import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatState {
  messages: string[]; // Example structure
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage(state, action: PayloadAction<string>) {
      state.messages.push(action.payload);
    },
    clearMessages(state) {
      state.messages = [];
    },
  },
});

export const { sendMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
export type RootState = ChatState; // Export the state type
