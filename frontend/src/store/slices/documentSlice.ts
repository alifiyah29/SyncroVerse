import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DocumentState {
  documents: string[]; // Example structure
}

const initialState: DocumentState = {
  documents: [],
};

const documentSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    addDocument(state, action: PayloadAction<string>) {
      state.documents.push(action.payload);
    },
    removeDocument(state, action: PayloadAction<string>) {
      state.documents = state.documents.filter(doc => doc !== action.payload);
    },
  },
});

export const { addDocument, removeDocument } = documentSlice.actions;
export default documentSlice.reducer;
export type RootState = DocumentState; // Export the state type
