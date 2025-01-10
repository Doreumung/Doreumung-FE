'use client';

import { useState } from 'react';
import Button from '@/components/common/buttons/Button';
import Input from '@/components/common/inputs/Input';
import { useRouter } from 'next/navigation';
import { useCheckPasswordMutation } from '@/api/userApi';

const Page = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [checkPw, { isLoading }] = useCheckPasswordMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(confirmPassword);

    // 검증 로직
    if (!confirmPassword) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }

    try {
      const result = await checkPw(JSON.stringify(confirmPassword)).unwrap();

      if (result.authentication == true) {
        setErrorMessage(''); // 오류 메시지 제거
        router.push('/edit-profile');
      } else {
        setErrorMessage('비밀번호가 일치하지 않습니다.');
      }
    } catch (err) {
      console.log('확인 실패', err);
      setErrorMessage('에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    }
  };

  return (
    <div className="flex justify-center w-screen h-[calc(100vh-80px)] px-4 md:px-0 pb-60">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 w-96"
      >
        <p className="text-xl text-darkerGray">비밀번호 확인</p>
        <Input
          id="confirmPassword"
          type="password"
          variant="eye"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)} // 상태 업데이트
        />
        {/* 오류 메시지 표시 */}
        {errorMessage && (
          <p className="self-center px-11 md:px-3 pb-3 text-xs text-red">{errorMessage}</p>
        )}
        <Button
          label="확인"
          onClick={() => {}}
          className="w-80 md:w-96 text-sm"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default Page;
