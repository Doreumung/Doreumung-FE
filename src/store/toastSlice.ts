import { ToastArgs } from '@/components/common/toast/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AddToastPayloadType = ToastArgs & {
  id: string;
};

type SingleToastType = AddToastPayloadType & {
  visible: boolean;
};

type ToastsType = {
  toasts: SingleToastType[];
};

const initialState: ToastsType = {
  toasts: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<AddToastPayloadType>) => {
      const newToast = { ...action.payload, visible: false };
      state.toasts.push(newToast);
    },
    showToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.map(toast =>
        toast.id === action.payload ? { ...toast, visible: true } : toast,
      );
    },
    hideToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.map(toast =>
        toast.id === action.payload ? { ...toast, visible: false } : toast,
      );
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },
  },
});

export const { addToast, showToast, hideToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
