export type ToastMessage = React.ReactNode;

export type ToastTypes = 'success' | 'error';

export type ToastArgs = { message: ToastMessage; type?: ToastTypes };

export type ToastTriggerArgs = { message: ToastMessage; type: ToastTypes };

export type SingleToast = {
  id: number;
  type: ToastTypes;
  message: ToastMessage;
  visible: boolean;
};

export type Toasts = {
  id: number;
  type: ToastTypes;
  message: ToastMessage;
  visible: boolean;
}[];
