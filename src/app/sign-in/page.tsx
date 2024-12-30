import Button from '@/components/common/buttons/Button';
import SocialLoginButton from '@/components/common/buttons/SocialLoginButton';
import Input from '@/components/common/inputs/Input';
import { useState } from 'react';

const Page = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="pb-8 text-3xl text-darkerGray">로그인</p>
      <div className="flex flex-col gap-4">
        <Input id="email" label="이메일" type="email" variant="signin" />
        <Input id="password" label="비밀번호" type="password" variant="signin" />
        <div className="flex gap-1.5 text-darkGray pb-10 px-2">
          <div
            className={`w-5 h-5 rounded-md ${
              isChecked ? 'bg-green' : 'bg-background border border-green'
            } flex items-center justify-center transition-transform duration-200 transform active:scale-125`}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          >
            {isChecked && (
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <p>자동 로그인</p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Button label="로그인" onClick={() => {}} className="w-96 text-sm" />
        <div className="flex gap-2 text-lightGray pb-10 justify-center">
          <p>아직 회원이 아니신가요?</p>
          <button className="underline underline-offset-4 text-darkerGray">회원가입</button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SocialLoginButton provider="kakao" onClick={() => {}} />
        <SocialLoginButton provider="naver" onClick={() => {}} />
        <SocialLoginButton provider="google" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Page;
