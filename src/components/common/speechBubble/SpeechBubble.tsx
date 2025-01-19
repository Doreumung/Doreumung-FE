import { SpeechBubbleProps } from './types';

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <div className="speech_bubble">{text}</div>
    </div>
  );
};

export default SpeechBubble;
