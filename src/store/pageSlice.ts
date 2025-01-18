import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type pageStateType = {
  reviewPage: number;
  myTravelPage: number;
};

const initialState: pageStateType = {
  reviewPage: 1,
  myTravelPage: 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setReviewPage: (state, action: PayloadAction<number>) => {
      state.reviewPage = action.payload;
    },
    setMyTravelPage: (state, action: PayloadAction<number>) => {
      state.myTravelPage = action.payload;
    },
    resetReviewPage: state => {
      state.reviewPage = initialState.reviewPage;
    },
    resetMyTravelPage: state => {
      state.myTravelPage = initialState.myTravelPage;
    },
  },
});

export const { setReviewPage, setMyTravelPage, resetReviewPage, resetMyTravelPage } =
  pageSlice.actions;
export default pageSlice.reducer;
