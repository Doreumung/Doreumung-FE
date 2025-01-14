import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type reviewImagesType = {
  addedImages: string[];
  currentImages: string[];
  deletedImages: string[];
};

const initialState: reviewImagesType = {
  addedImages: [],
  currentImages: [],
  deletedImages: [],
};

const reviewImagesSlice = createSlice({
  name: 'reviewImages',
  initialState,
  reducers: {
    setAddedImages: (state, action: PayloadAction<string>) => {
      state.addedImages = [...state.addedImages, action.payload];
    },
    setCurrentImages: (state, action: PayloadAction<string[]>) => {
      state.currentImages = action.payload;
    },
    setDeletedImages: (state, action: PayloadAction<string[]>) => {
      state.deletedImages = action.payload;
    },
  },
});

export const { setAddedImages, setCurrentImages, setDeletedImages } = reviewImagesSlice.actions;
export default reviewImagesSlice.reducer;
