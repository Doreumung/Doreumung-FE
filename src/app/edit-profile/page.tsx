'use client';

import { useEffect, useState } from 'react';
import PasswordForm from '@/components/edit-profile/form/PasswordForm';
import UserDataForm from '@/components/edit-profile/form/UserDataForm';
import Button from '@/components/common/buttons/Button';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Toast, { toast } from '@/components/common/toast/Toast';

const Page = () => {
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const { user, loginType } = useSelector((state: RootState) => state.user);
  const [isUserUpdate, setIsUserUpdate] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    if (isUserUpdate === 'success') {
      toast({
        message: '성공적으로 변경되었습니다!',
        type: 'success',
      });

      setIsUserUpdate(null);
    } else if (isUserUpdate === 'error') {
      toast({
        message: (
          <>
            변경에 실패하였습니다. <br />
            잠시 후 다시 시도해 주세요!
          </>
        ),
        type: 'error',
      });

      setIsUserUpdate(null);
    }
  }, [isUserUpdate]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex justify-center items-center overflow-y-auto">
      <div
        className={clsx(
          'flex flex-col justify-center items-center gap-6 w-96',
          loginType !== 'email' ? 'h-[calc(100vh-80px)] pb-[80px]' : 'pt-10',
        )}
      >
        <p className="pb-2 text-3xl text-darkerGray">회원정보 수정</p>
        {loginType == 'email' ? <PasswordForm setIsUserUpdate={setIsUserUpdate} /> : null}
        <UserDataForm setIsUserUpdate={setIsUserUpdate} />
        <Button
          color="darkerGray"
          label="회원 탈퇴"
          className="self-end"
          type="button"
          onClick={() => {
            setShowLayerPopup(true);
          }}
        />
        {showLayerPopup && (
          <LayerPopup
            label={
              <>
                탈퇴 시 저장된 모든 정보가 삭제됩니다. <br />
                탈퇴하시겠습니까?
              </>
            }
            setShowLayerPopup={setShowLayerPopup}
            onConfirm={() => {}}
          />
        )}
      </div>
      <Toast />
    </div>
  );
};

export default Page;
