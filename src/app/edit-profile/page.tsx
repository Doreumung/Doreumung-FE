'use client';

import { useState } from 'react';
import PasswordForm from '@/components/edit-profile/form/PasswordForm';
import UserDataForm from '@/components/edit-profile/form/UserDataForm';
import Button from '@/components/common/buttons/Button';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';

export type UserDataType = {
  nickname: string;
  password: string;
  age: number;
  gender: 'male' | 'female' | 'none';
  birthday: Date;
};
const Page = () => {
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] pb-[80px]">
      <div className="flex flex-col items-center gap-6 w-96">
        <p className="pb-2 text-3xl text-darkerGray">회원정보 수정</p>
        <PasswordForm />
        <UserDataForm />
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
    </div>
  );
};

export default Page;
