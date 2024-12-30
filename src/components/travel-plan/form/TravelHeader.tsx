import SpeechBubble from '@/components/common/speechBubble/SpeechBubble';
import Image from 'next/image';
import Dolmung from '@public/images/dolmung.svg';
import { TravelHeaderProps } from './types';

const TravelHeader: React.FC<TravelHeaderProps> = ({ step }) => {
  return (
    <div className="flex flex-col gap-3 pt-4">
      <div className="relative left-4">
        <SpeechBubble text={`${step}을 선택하지 않으면 랜덤으로 배정돼요!`} />
      </div>
      <div className="flex items-center gap-4">
        <Image src={Dolmung} alt="dolmung" width={50} />
        <h3 className="text-2xl sm:text-3xl">{step} 선택</h3>
      </div>
    </div>
  );
};

export default TravelHeader;
