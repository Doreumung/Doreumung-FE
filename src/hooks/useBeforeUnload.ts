import { useEffect } from 'react';
import { UseBeforeUnloadOption } from './types';

const useBeforeUnload = ({ message }: UseBeforeUnloadOption = { message: '' }) => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      if (message) {
        e.returnValue = message;
      }
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [message]);
};
export default useBeforeUnload;
