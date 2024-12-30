import SpeechBubble from '@/components/common/speechBubble/SpeechBubble';
import Image from 'next/image';
import Dolmung from '@public/images/dolmung.svg';
import { TravelHeaderProps } from './types';

const TravelHeader: React.FC<TravelHeaderProps> = ({ step, stepName }) => {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <div className="relative left-2">
        <SpeechBubble text={step} />
      </div>
      <div className="flex items-center gap-4">
        <Image src={Dolmung} alt="dolmung" width={50} />
        <h3 className="text-2xl sm:text-3xl">{stepName}</h3>
      </div>
    </div>
  );
};

export default TravelHeader;
