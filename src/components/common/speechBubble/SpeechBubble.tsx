import { SpeechBubbleProps } from './types';

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text }) => {
  return <div className="speech_bubble">{text}</div>;
};

export default SpeechBubble;
