import SpeechBubble from '@/components/common/speechBubble/SpeechBubble';
import { TravelHeaderProps } from './types';

const TravelHeader: React.FC<TravelHeaderProps> = ({ step, stepName }) => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <div className="relative left-2">
        <SpeechBubble text={step} />
      </div>
      <div className="flex items-center gap-4">
        <div className="shrink-0 w-12 h-12 bg-center bg-no-repeat bg-contain bg-[url('/images/dolmung.svg')]" />
        <h1 className="text-2xl sm:text-3xl">{stepName}</h1>
      </div>
    </div>
  );
};

export default TravelHeader;
