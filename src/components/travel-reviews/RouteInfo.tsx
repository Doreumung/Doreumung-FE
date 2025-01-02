import {
  INFO_CONTAINER_STYLES,
  LABEL_STYLES,
} from '@/app/travel-reviews/create/[routeId]/constants';
import { RouteInfoProps } from './types';

const RouteInfo = ({ label, content }: RouteInfoProps) => {
  return (
    <div className={INFO_CONTAINER_STYLES}>
      <span className={LABEL_STYLES}>{label}</span>
      <div
        className={
          'flex justify-center items-center min-h-11 max-w-[700px] px-4 py-2 border border-green rounded-2xl bg-fadedGreen text-center text-darkerGray'
        }
      >
        {content}
      </div>
    </div>
  );
};

export default RouteInfo;
