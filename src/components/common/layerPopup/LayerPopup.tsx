'use client';

import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { LayerPopupProps } from './types';
import { layerPopupStyles } from './layerPopupStyles';
import Button from '../buttons/Button';
import Image from 'next/image';
import Input from '../inputs/Input';

const LayerPopup: React.FC<LayerPopupProps> = ({ label, type, onConfirm, ...props }) => {
  const isConfirmPopup = type === 'confirm'; // 입력창 없는 팝업
  const [isVisible, setIsVisible] = useState<boolean>(true); // 취소 버튼 누르면 닫기

  const [titleData, setTitleData] = useState<string>(''); // 제목 지정

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(titleData); // 부모 컴포넌트에 데이터 전달
    }
    setIsVisible(false); // 팝업 닫기
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    <div
      className={clsx(
        'flex justify-center items-center fixed inset-0 bg-overlay transition-opacity z-50',
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
    >
      {isConfirmPopup ? (
        <div className={layerPopupStyles()} {...props}>
          <div className="relative p-6 h-50 rounded-2xl">
            <div className="flex flex-col gap-20">
              <div className="flex justify-start items-center gap-5 text-base">
                <Image src="/images/dolmung.svg" alt="dolmung image" width={60} height={60} />
                {label && label}
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  label="취소"
                  size={'xs'}
                  color="lightGray"
                  onClick={() => {
                    setIsVisible(false);
                  }}
                />
                <Button label="확인" size={'xs'} onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={layerPopupStyles()} {...props}>
          <div className="relative w-full p-6 h-62 rounded-2xl">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center self-start gap-3 pl-6 text-base">
                <Image src="/images/dolmung.svg" alt="dolmung image" width={50} height={50} />
                {label && label}
              </div>
              <Input
                id="title"
                type="text"
                variant="title"
                className="w-96 self-center"
                placeholder="2024-12-31"
                value={titleData}
                onChange={event => setTitleData(event.target.value)}
              />
              <div className="flex self-end gap-3 pt-5">
                <Button
                  label="취소"
                  size={'xs'}
                  color="lightGray"
                  onClick={() => {
                    setIsVisible(false);
                  }}
                />
                <Button
                  label="확인"
                  size={'xs'}
                  onClick={() => {
                    handleConfirm();
                    console.log(titleData); // 확인용
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayerPopup;
