import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import documentReducer from './slices/documentSlice';
import chatReducer from './slices/chatSlice';
import type { UserState } from './slices/userSlice';
import type { DocumentState } from './slices/documentSlice';
import type { ChatState } from './slices/chatSlice';

export interface RootState {
  user: UserState;
  documents: DocumentState;
  chat: ChatState;
}

const store = configureStore({
  reducer: {
    user: userReducer,
    documents: documentReducer,
    chat: chatReducer,
  },
});

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
