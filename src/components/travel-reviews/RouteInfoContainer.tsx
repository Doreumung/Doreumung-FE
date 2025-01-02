import { RouteInfoProps } from './types';
import {
  routeInfoContainerStyles,
  routeInfoContentStyles,
  routeInfoLabelStyles,
} from './RouteInfoStyles';

const RouteInfoContainer = ({ variant = 'reviewCreate', label, content }: RouteInfoProps) => {
  return (
    <div className={routeInfoContainerStyles({ variant })}>
      <span className={routeInfoLabelStyles({ variant })}>{label}</span>
      <div className={routeInfoContentStyles({ variant })}>{content}</div>
    </div>
  );
};

export default RouteInfoContainer;
