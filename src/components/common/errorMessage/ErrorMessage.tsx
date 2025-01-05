import { twMerge } from 'tailwind-merge';
import { ErrorMessageProps } from './types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className, ...props }) => {
  return (
    <p {...props} role="alert" className={twMerge('text-sm text-red', className)}>
      {message}
    </p>
  );
};

export default ErrorMessage;
