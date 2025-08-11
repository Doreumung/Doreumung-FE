'use client';

import { useForm } from 'react-hook-form';
import { passwordChangeSchema, PasswordChangeSchema } from '../schema/passwordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/common/buttons/Button';
import Input from '@/components/common/inputs/Input';
import { useState } from 'react';
import clsx from 'clsx';
import { useUpdateUserInfoMutation } from '@/api/userApi';

const PasswordForm = ({
  setIsUserUpdate,
}: {
  setIsUserUpdate: React.Dispatch<React.SetStateAction<'success' | 'error' | null>>;
}) => {
  const [isPasswordChangeActive, setIsPasswordChangeActive] = useState<boolean>(false);
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

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

  const onSubmit = async (data: PasswordChangeSchema) => {
    try {
      const newPassword = data.password;
      console.log(JSON.stringify({ new_password: newPassword }));

      const result = await updateUserInfo({ new_password: newPassword }).unwrap(); // RTK Query의 unwrap 사용
      console.log('비밀번호 변경 성공: ', result);

      setIsUserUpdate('success');
      setIsPasswordChangeActive(false); // 폼 닫기
    } catch (err) {
      console.error('비밀번호 변경 실패: ', err);
      setIsUserUpdate('error'); // 실패 시 false
    } finally {
      reset({ password: '', confirmPassword: '' }); // 폼 초기화
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-col justify-between p-5 w-full h-32 rounded-2xl border border-black bg-fadedGreen',
        'transition-all duration-200 ease-in-out',
        isPasswordChangeActive && 'h-[320px]',
      )}
    >
      <p className="self-start text-lg">비밀번호 변경</p>
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
              className="self-start w-full"
              {...register('password')}
            />
            {errors.password && <p className="px-3 text-xs text-red">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Input
              id="confirmPassword"
              type="password"
              variant="eye"
              label="새 비밀번호 확인"
              labelColor="darkerGray"
              placeholder="새 비밀번호 확인"
              className="self-start w-full"
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
            size="sm"
            type="button"
            onClick={() => {
              reset({ password: '', confirmPassword: '' }); // 상태 초기화
              setIsPasswordChangeActive(false); // 상태 업데이트를 비동기로 처리
            }}
            className="bg-lighterGray text-darkerGray"
          />
        )}
        <Button
          label={isPasswordChangeActive ? '저장' : '변경'}
          size="sm"
          type="button"
          onClick={() => {
            if (isPasswordChangeActive) {
              handleSubmit(onSubmit)();
              if (isValid) {
                setIsPasswordChangeActive(false);
              }
            } else {
              setIsPasswordChangeActive(true);
            }
          }}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default PasswordForm;
