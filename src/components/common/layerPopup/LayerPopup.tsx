'use client';

import React, { useEffect } from 'react';
import { clsx } from 'clsx';
import { layerPopupVariants } from './LayerPopupStyles';
import { LayerPopupProps } from './types';

const LayerPopup: React.FC<LayerPopupProps> = ({
  // React.FC - 함수형 컴포넌트
  visible,
  size,
  children,
  label,
  onClose,
  ...props
}) => {
  // ESC 키 핸들러
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && visible) {
        onClose?.(); // onClose 콜백 호출
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
        'fixed inset-0 flex items-center justify-center transition-opacity bg-overlay',
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      <div
        className={layerPopupVariants({ visible, size })}
        {...props} // 추가 HTML 속성
      >
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
