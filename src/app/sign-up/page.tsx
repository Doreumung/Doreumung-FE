'use client';

import Button from '@/components/common/buttons/Button';
import Input from '@/components/common/inputs/Input';
import Select from '@/components/common/select/Select';
import { SignUpSchema, signUpSchema } from './signUpSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const Page = () => {
  const genderOptions: string[] = ['여성', '남성', '선택안함'];
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Select 컴포넌트에서 생년월일 데이터 받아오기
  const [selectedGender, setSelectedGender] = useState<string | null>(null); // 선택된 성별
  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(event.target.value); // 선택된 값 업데이트
  };

  const {
    register, // 연결하여 유효성 검사 진행
    handleSubmit, // 폼 제출 시 실행
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange', // 유효성 검사 진행
  });

  const onSubmit = (data: SignUpSchema) => {
    // 제출했을 때 data 반환
    // 필수 항목 + 선택 항목 데이터 합쳐서 반환
    const genderData: string =
      selectedGender === '여자' ? 'female' : selectedGender === '남자' ? 'male' : 'Unknown';

    const userData = { ...data, selectedDate, genderData };
    console.log(userData);

    // 확인용
    console.log('Form Data:', data);
    console.log(selectedDate);
    console.log(selectedGender);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center h-[calc(100vh-80px)]"
    >
      <div className="inline-block w-96">
        <p className="pb-8 text-3xl text-darkerGray text-center">회원가입</p>
        <div className="flex flex-col gap-3">
          <Input id="email" label="이메일" {...register('email')} type="email" variant="default" />
          {errors.email && <p className="px-3 pb-3 text-xs text-red-600">{errors.email.message}</p>}

          <Input id="text" label="닉네임" {...register('username')} type="text" variant="default" />
          {errors.username && (
            <p className="px-3 pb-3 text-xs text-red-600">{errors.username.message}</p>
          )}

          <Input
            id="password"
            label="비밀번호"
            {...register('password')}
            type="password"
            variant="default"
          />
          {errors.password && (
            <p className="px-3 pb-3 text-xs text-red-600">{errors.password.message}</p>
          )}

          <Input
            id="confirmPassword"
            label="비밀번호 확인"
            {...register('confirmPassword')}
            type="password"
            variant="default"
          />
          {errors.confirmPassword && (
            <p className="px-3 pb-3 text-xs text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="flex items-center pt-5 py-5 px-3 text-darkGray">
          <p className="pr-2">선택 항목</p>
          <div className="flex-grow h-px bg-lighterGray"></div>
        </div>

        <div className="flex flex-col gap-3">
          <Select setSelectedDate={setSelectedDate} />

          <div>
            <p className="px-5 pb-2 text-sm text-logo">성별</p>
            <div className="flex gap-7 px-3">
              {genderOptions.map(genderOption => {
                return (
                  <label
                    key={genderOption}
                    className="flex items-center space-x-2 pb-5 accent-darkGray"
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={genderOption}
                      className="w-3"
                      onChange={handleGenderChange}
                    />
                    <span className="h-4 text-sm text-darkGray align-middle">{genderOption}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <Button label="가입하기" onClick={() => {}} className="w-96 text-sm" />
        </div>
      </div>
    </form>
  );
};

export default Page;
