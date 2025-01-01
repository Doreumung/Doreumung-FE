'use client';

import { useForm } from 'react-hook-form';
import { passwordChangeSchema, PasswordChangeSchema } from '../schema/passwordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/common/buttons/Button';
import Input from '@/components/common/inputs/Input';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { UserDataType } from '../types';

const PasswordForm = () => {
  const [isPasswordChangeActive, setIsPasswordChangeAcitve] = useState<boolean>(false);

  const [userData, setUserData] = useState<UserDataType>({
    // 임시 데이터
    nickname: 'jjangs',
    password: 'qwer1234',
    age: 123,
    gender: 'male',
    birthday: new Date('1997-12-14'),
  });

  // 확인용
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  // zod
  const {
    register, // 연결하여 유효성 검사 진행
    handleSubmit, // 폼 제출 시 실행
    formState: { errors, isValid },
    reset,
  } = useForm<PasswordChangeSchema>({
    resolver: zodResolver(passwordChangeSchema),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: PasswordChangeSchema) => {
    setUserData(prev => ({
      ...prev,
      ['password']: data.password,
    }));

    reset({ password: '', confirmPassword: '' });
  };

  return (
    <div
      className={clsx(
        'flex flex-col justify-between px-7 py-5 w-96 h-52 rounded-2xl border border-black bg-fadedGreen',
        'transition-all duration-200',
        isPasswordChangeActive && 'h-[350px]',
      )}
    >
      <p className="self-start text-xl">비밀번호 변경</p>
      {isPasswordChangeActive && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Input
              id="password"
              type="password"
              label="새 비밀번호"
              labelColor="darkerGray"
              variant="eye"
              placeholder="새 비밀번호 입력"
              className="self-start w-80"
              {...register('password')}
            />
            {errors.password && <p className="px-3 text-xs text-red">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Input
              id="confirmpassword"
              type="password"
              variant="eye"
              label="새 비밀번호 확인"
              labelColor="darkerGray"
              placeholder="새 비밀번호 확인"
              className="self-start w-80"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="relative px-3 text-xs text-red">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>
      )}

      <div className="flex gap-2 self-end text-darkerGray">
        {isPasswordChangeActive && (
          <Button
            label="취소"
            size={'sm'}
            onClick={() => {
              reset({ password: '', confirmPassword: '' }); // 상태 초기화
              setIsPasswordChangeAcitve(false); // 상태 업데이트를 비동기로 처리
            }}
            className="bg-lighterGray text-darkerGray"
          />
        )}
        <Button
          label={isPasswordChangeActive ? '저장' : '변경'}
          size={'sm'}
          onClick={() => {
            if (isPasswordChangeActive) {
              handleSubmit(onSubmit)(); // why
              if (isValid) {
                setIsPasswordChangeAcitve(false);
              }
            } else {
              setIsPasswordChangeAcitve(true);
            }
          }}
        />
      </div>
    </div>
  );
};

export default PasswordForm;
