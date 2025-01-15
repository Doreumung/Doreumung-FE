import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LEAVE_ALERT_PATHS = ['/travel-reviews/create', '/travel-reviews/edit'];

type NavigationState = {
  isNavigationConfirmationRequired: boolean;
  showNavigationPopup: boolean;
  navigationPath: string;
};

const initialState: NavigationState = {
  isNavigationConfirmationRequired: false,
  showNavigationPopup: false,
  navigationPath: '',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    checkPath: (state, action: PayloadAction<string>) => {
      state.isNavigationConfirmationRequired = LEAVE_ALERT_PATHS.some(path =>
        action.payload.startsWith(path),
      );
    },
    setNavigationPath: (state, action: PayloadAction<string>) => {
      state.navigationPath = action.payload;
    },
    showPopup: state => {
      state.showNavigationPopup = true;
    },
    hidePopup: state => {
      state.showNavigationPopup = false;
    },
    navigate: state => {
      state.showNavigationPopup = false;
    },
  },
});

export const { checkPath, setNavigationPath, showPopup, hidePopup, navigate } =
  navigationSlice.actions;

export default navigationSlice.reducer;
