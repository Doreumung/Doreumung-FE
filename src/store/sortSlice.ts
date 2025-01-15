import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortCriteria, SortOrder } from '@/components/travel-reviews/types';

type sortType = {
  sortState: Record<SortCriteria, SortOrder>;
  orderBy: SortCriteria;
};

const initialState: sortType = {
  sortState: {
    created_at: 'desc',
    like_count: 'desc',
    comment_count: 'desc',
  },
  orderBy: 'created_at',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortState: (state, action: PayloadAction<Record<SortCriteria, SortOrder>>) => {
      state.sortState = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<SortCriteria>) => {
      state.orderBy = action.payload;
    },
    resetSortState: state => {
      state.sortState = initialState.sortState;
      state.orderBy = initialState.orderBy;
    },
  },
});

export const { setSortState, setOrderBy, resetSortState } = sortSlice.actions;
export default sortSlice.reducer;
