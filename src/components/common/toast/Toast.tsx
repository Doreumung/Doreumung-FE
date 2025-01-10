'use client';

import clsx from 'clsx';
import { toastStyles } from './toastStyles';
import { ToastArgs } from './types';
import { X } from 'lucide-react';
import { RootState, store } from '@/store/store';
import { addToast, hideToast, removeToast, showToast } from '@/store/toastSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { v4 as uuid } from 'uuid';

export const toast = ({ message, type = 'success' }: ToastArgs) => {
  const id = uuid();
  store.dispatch(addToast({ id, message, type }));
  setTimeout(() => store.dispatch(showToast(id)), 300);
  setTimeout(() => store.dispatch(hideToast(id)), 5000);
  setTimeout(() => store.dispatch(removeToast(id)), 5300);
};

const Toast = () => {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector((state: RootState) => state.toast.toasts);

  const handleClickClose = (id: string) => {
    dispatch(removeToast(id));
  };

  if (toasts.length === 0) return null;

  return (
    <div className="flex flex-col-reverse gap-4 fixed right-0 sm:right-4 bottom-4 w-full max-w-md px-4">
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
                'size-12 sm:size-14 bg-cover',
                type === 'success' && 'bg-[url(/images/dolmung.svg)]',
                type === 'error' && 'bg-[url(/images/sadDolmung.svg)]',
              )}
            />
            <div className="flex flex-col gap-1">
              {message.map(row => (
                <p key={`${id}-${row}`}>{row}</p>
              ))}
            </div>
          </div>
          <X
            size={18}
            className={clsx('absolute top-3 right-3 text-darkerGray cursor-pointer')}
            onClick={() => handleClickClose(id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Toast;
