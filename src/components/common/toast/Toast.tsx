import clsx from 'clsx';
import { toastStyles } from './toastStyles';
import React, { useEffect, useState } from 'react';
import { SingleToast, ToastArgs, Toasts, ToastTriggerArgs } from './types';
import { X } from 'lucide-react';

let toastTrigger: ({ message, type }: ToastTriggerArgs) => void;

export const toast = ({ message, type = 'success' }: ToastArgs) => {
  if (toastTrigger) toastTrigger({ message, type });
};

const Toast = () => {
  const [toasts, setToasts] = useState<Toasts>([]);
  const [toastId, setToastId] = useState<number>(0);

  const handleClickClose = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  useEffect(() => {
    toastTrigger = ({ message, type }) => {
      const newToast: SingleToast = {
        id: toastId,
        type,
        message,
        visible: false,
      };

      setToasts(prev => [...prev, newToast]);
      setToastId(prev => prev + 1);

      setTimeout(
        () =>
          setToasts(prev =>
            prev.map(toast => (toast.id === newToast.id ? { ...toast, visible: true } : toast)),
          ),
        300,
      );

      setTimeout(
        () =>
          setToasts(prev =>
            prev.map(toast => (toast.id === newToast.id ? { ...toast, visible: false } : toast)),
          ),
        5000,
      );

      setTimeout(() => setToasts(prev => prev.filter(toast => toast.id !== newToast.id)), 5300);
    };
  }, [toastId]);

  if (toast.length === 0) return null;

  return (
    <div className="flex flex-col-reverse gap-4 fixed right-4 bottom-4 w-full max-w-96">
      {toasts.map(({ id, type, message, visible }) => (
        <div
          key={id}
          className={clsx(
            toastStyles({ type }),
            visible
              ? 'opacity-100 translate-x-0 translate-y-0'
              : 'opacity-0 translate-x-96 translate-y-4',
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={clsx(
                'size-14 bg-cover',
                type === 'success' && 'bg-[url(/images/dolmung.svg)]',
                type === 'error' && 'bg-[url(/images/sadDolmung.svg)]',
              )}
            />
            <p>{message}</p>
          </div>
          <X
            className={clsx('absolute top-3 right-3 text-darkerGray cursor-pointer')}
            onClick={() => handleClickClose(id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Toast;
