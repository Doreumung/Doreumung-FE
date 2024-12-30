'use client';

import Button from '@/components/common/buttons/Button';
import SocialLoginButton from '@/components/common/buttons/SocialLoginButton';
import Input from '@/components/common/inputs/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInSchema, SignInSchema } from './signInSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const Page = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const {
    register, // 연결하여 유효성 검사 진행
    handleSubmit, // 폼 제출 시 실행
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange', // 유효성 검사 진행
  });

  const onSubmit = (data: SignInSchema) => {
    // 제출했을 때 data 반환
    const userData = { ...data, isChecked };
    console.log(userData);

    // 확인용
    console.log('Form Data:', data);
    console.log(isChecked);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center h-screen"
    >
      <p className="pb-8 text-3xl text-darkerGray">로그인</p>
      <div className="flex flex-col gap-4">
        <Input id="email" label="이메일" type="email" variant="signin" {...register('email')} />
        {errors.email && <p className="px-3 pb-1 text-xs text-red-600">{errors.email.message}</p>}
        <Input
          id="password"
          label="비밀번호"
          type="password"
          variant="signin"
          {...register('password')}
        />
        {errors.password && (
          <p className="px-3 pb-1 text-xs text-red-600">{errors.password.message}</p>
        )}
        <div className="flex gap-1.5 pb-10 px-2 text-darkGray">
          <div
            className={`w-5 h-5 rounded-md ${
              isChecked ? 'bg-green' : 'border border-green bg-background'
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
        <div className="flex justify-center gap-2 pb-10 text-lightGray">
          <p>아직 회원이 아니신가요?</p>
          <button className="text-darkerGray underline underline-offset-4">회원가입</button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SocialLoginButton provider="kakao" onClick={() => {}} />
        <SocialLoginButton provider="naver" onClick={() => {}} />
        <SocialLoginButton provider="google" onClick={() => {}} />
      </div>
    </form>
  );
};

export default Page;
