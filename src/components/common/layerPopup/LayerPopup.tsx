'use client';

import React, { useEffect } from 'react';
import { clsx } from 'clsx';
import { LayerPopupProps } from './types';
import { layerPopupStyles } from './layerPopupStyles';

const LayerPopup: React.FC<LayerPopupProps> = ({
  visible,
  size,
  children,
  label,
  onClose,
  ...props
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && visible) {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);

  return (
    <div
      className={clsx(
        'flex justify-center items-center fixed inset-0 bg-overlay transition-opacity',
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      <div className={layerPopupStyles({ visible, size })} {...props}>
        <div className="relative w-full p-6 rounded-2xl">
          <div className="flex flex-col gap-6">
            <div className="flex justify-start gap-5 text-base">
              <img src="/images/dolmung.png" className="w-16"></img>
              {label && label}
            </div>
            <div>{children && children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerPopup;
