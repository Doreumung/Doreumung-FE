'use client';

import { useState } from 'react';
import Button from '@/components/common/buttons/Button';
import Input from '@/components/common/inputs/Input';

const Page = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sessionPassword = 'example123'; // 예시

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(confirmPassword);

    // 검증 로직
    if (!confirmPassword) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }

    if (confirmPassword === sessionPassword) {
      setErrorMessage(''); // 오류 메시지 제거
    } else {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="flex justify-center w-screen h-screen px-4 md:px-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-3 w-96"
      >
        <p className="text-xl text-darkerGray">비밀번호 확인</p>
        <Input
          id="confirmPassword"
          type="password"
          variant="default"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)} // 상태 업데이트
        />
        {/* 오류 메시지 표시 */}
        {errorMessage && (
          <p className="self-start px-11 md:px-3 pb-3 text-xs text-red-600">{errorMessage}</p>
        )}
        <Button label="확인" onClick={() => {}} className="w-80 md:w-96 text-sm" />
      </form>
    </div>
  );
};

export default Page;
