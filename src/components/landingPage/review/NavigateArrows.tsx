import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const NavigateArrows = ({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className: 'prevEl' | 'nextEl';
}) => {
  return (
    <button
      className={twMerge(
        clsx(
          'hidden absolute top-1/2 -translate-y-1/2 md:block',
          className,
          className === 'prevEl' ? 'prevEl left-0' : 'nextEl right-0',
        ),
      )}
    >
      <Icon size={36} strokeWidth={3} className="text-green hover:scale-110" />
    </button>
  );
};

export default NavigateArrows;
