import { twMerge } from 'tailwind-merge';
import { SpeechBubbleProps } from './types';

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, className }) => {
  return (
    <div className={twMerge('w-full', className)}>
      <div className="speech_bubble">{text}</div>
    </div>
  );
};

export default SpeechBubble;
