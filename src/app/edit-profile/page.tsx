'use client';

import { useEffect, useState } from 'react';
import PasswordForm from '@/components/edit-profile/form/PasswordForm';
import UserDataForm from '@/components/edit-profile/form/UserDataForm';
import Button from '@/components/common/buttons/Button';
import LayerPopup from '@/components/common/layerPopup/LayerPopup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toast } from '@/components/common/toast/Toast';
import { useDeleteUserInfoMutation } from '@/api/userApi';
import { useRouter } from 'next/navigation';
import { clearUser } from '@/store/userSlice';
import { destroyCookie } from 'nookies';

const Page = () => {
  const [showLayerPopup, setShowLayerPopup] = useState<boolean>(false);
  const { user, loginType } = useSelector((state: RootState) => state.user);
  const [isUserUpdate, setIsUserUpdate] = useState<'success' | 'error' | null>(null);
  const [deleteUser] = useDeleteUserInfoMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserUpdate === 'success') {
      toast({ message: ['성공적으로 변경되었습니다!'] });

      setIsUserUpdate(null);
    } else if (isUserUpdate === 'error') {
      toast({
        message: ['변경에 실패하였습니다.', '잠시 후 다시 시도해 주세요!'],
        type: 'error',
      });

      setIsUserUpdate(null);
    }
  }, [isUserUpdate]);

  const deleteHandeler = async () => {
    try {
      await deleteUser({}).unwrap();
      console.log('회원 탈퇴 성공');

      toast({ message: ['성공적으로 탈퇴되었습니다.', '메인 화면으로 이동합니다.'] });

      setTimeout(() => {
        router.push('/');
      }, 2000); // 메인 이동

      // 탈퇴 처리
      localStorage.removeItem('persist:user');
      localStorage.removeItem('auto_signin');
      dispatch(clearUser());

      destroyCookie(null, 'access_token', { path: '/' });
      destroyCookie(null, 'refresh_token', { path: '/' });
    } catch (err) {
      console.log('회원 탈퇴 실패', err);

      toast({
        message: ['탈퇴에 실패하였습니다.', '잠시 후 다시 시도해 주세요!'],
        type: 'error',
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex justify-center items-center w-96 overflow-y-auto">
      <div className="flex flex-col justify-center items-center gap-6 w-full min-h-[calc(100vh-80px)] py-5">
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
            onConfirm={deleteHandeler}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
