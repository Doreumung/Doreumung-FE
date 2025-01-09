'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { nicknameChangeSchema, NicknameChangeSchema } from '../schema/nicknameSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import Select from '@/components/common/select/Select';
import Button from '@/components/common/buttons/Button';
import Input from '@/components/common/inputs/Input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Image from 'next/image';
import kakaoLogin from '@public/images/kakaoLogin.svg';
import googleLogin from '@public/images/googleLogo.png';
import { useUpdateUserInfoMutation } from '@/api/userApi';
import { updateUser } from '@/store/userSlice';

const UserDataForm = ({
  setIsUserUpdate,
}: {
  setIsUserUpdate: React.Dispatch<React.SetStateAction<'success' | 'error' | null>>;
}) => {
  const { user: userData, loginType } = useSelector((state: RootState) => state.user);
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();
  const dispatch = useDispatch();

  // 확인용
  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const genderOptions: { value: 'female' | 'male' | 'none'; label: string }[] = [
    { value: 'female', label: '여성' },
    { value: 'male', label: '남성' },
    { value: 'none', label: '선택안함' },
  ];

  const [newGender, setNewGender] = useState(userData?.gender); // 초기값 설정

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGender(event.target.value as 'female' | 'male' | 'none'); // 선택된 값 업데이트
  };

  const [newBirthday, setNewBirthday] = useState<string | null>(null); // 새로운 생년월일 관리
  const [isUserDataChangeActive, setIsUserDataChangeActive] = useState<boolean>(false);

  const {
    register, // 연결하여 유효성 검사 진행
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm<NicknameChangeSchema>({
    resolver: zodResolver(nicknameChangeSchema),
    mode: 'onBlur',
    defaultValues: {
      nickname: userData?.nickname, // 초기값 설정
    },
  });

  // userData가 없으면 null 반환
  if (!userData) {
    return null; // 렌더링 중단
  }

  const handleSave = async (data: NicknameChangeSchema) => {
    // 닉네임 포함, 변경된 것들만 업데이트
    const updatedData = {
      new_nickname: data.nickname,
      ...(newBirthday !== userData.birthday ? { new_birthday: newBirthday } : {}),
      ...(newGender !== userData.gender ? { new_gender: newGender } : {}),
    };

    // 확인용
    console.log(updatedData);

    try {
      // PATCH 요청
      const result = await updateUserInfo(JSON.stringify(updatedData)).unwrap();
      console.log('회원정보 변경 성공: ', result.data);

      // 비밀번호 필드를 제외한 새로운 객체 생성
      const filteredData = { ...result.data }; // 원본 객체 복사
      delete filteredData.password; // password 필드 제거

      // 상태 업데이트
      dispatch(updateUser(filteredData));

      setIsUserDataChangeActive(false);
      setIsUserUpdate('success');
    } catch (err) {
      console.log('회원정보 변경 실패', err);

      setNewGender(userData.gender);
      setNewBirthday(userData.birthday);

      setIsUserDataChangeActive(false);
      setIsUserUpdate('error');
    }
  };

  const handleSaveWithoutNickname = async () => {
    // 닉네임 변경 없이 다른 데이터만 업데이트
    const updatedData = {
      ...(newBirthday !== userData.birthday ? { new_birthday: newBirthday } : {}),
      ...(newGender !== userData.gender ? { new_gender: newGender } : {}),
    };

    console.log(updatedData); // 확인용

    try {
      // PATCH 요청
      const result = await updateUserInfo(JSON.stringify(updatedData)).unwrap(); // unwrap으로 성공 여부 확인
      console.log('회원정보 변경 성공: ', result);

      // 비밀번호 필드를 제외한 새로운 객체 생성
      const filteredData = { ...result }; // 원본 객체 복사
      delete filteredData.password; // password 필드 제거

      // 상태 업데이트
      dispatch(updateUser(filteredData));
      setIsUserDataChangeActive(false);
      setIsUserUpdate('success'); // 성공 상태로 업데이트
    } catch (err) {
      // 오류 처리
      console.error('회원정보 변경 실패: ', err);

      // 이전 상태로 되돌리기
      setNewGender(userData.gender);
      setNewBirthday(userData.birthday);
      setIsUserDataChangeActive(false);
      setIsUserUpdate('error'); // 실패 상태로 업데이트
    }
  };

  const divStyle = `flex flex-col gap-2`;

  return (
    <div className="flex flex-col justify-between px-7 py-5 w-96 h-[440px] rounded-2xl border border-black bg-fadedGreen">
      <div className={divStyle}>
        <p className="text-xl">이메일</p>
        <div className="flex items-center gap-2">
          {loginType == 'kakao' ? (
            <Image src={kakaoLogin} alt="kakao Login" width={20} height={20} />
          ) : loginType == 'google' ? (
            <Image src={googleLogin} alt="google Login" className="w-5 h-5" />
          ) : null}
          <p className="text-darkerGray">{userData?.email}</p>
        </div>
      </div>
      <div className={divStyle}>
        <p className="text-xl">닉네임</p>
        {isUserDataChangeActive ? (
          <Input
            id="nickname"
            variant="default"
            className="self-start w-80"
            placeholder={userData?.nickname}
            {...register('nickname')}
          />
        ) : (
          <p className="text-darkerGray">{userData?.nickname}</p>
        )}
        {isUserDataChangeActive && errors.nickname && (
          <p className="px-3 pb-3 text-xs text-red">{errors.nickname.message}</p>
        )}
      </div>
      <div className={divStyle}>
        <p className="text-xl">생년월일</p>
        {isUserDataChangeActive ? (
          <Select
            setSelectedDate={setNewBirthday}
            optional={false}
            defaultDate={userData?.birthday}
          />
        ) : (
          <p className="text-darkerGray">{dayjs(userData?.birthday).format('YYYY-MM-DD')}</p>
        )}
      </div>

      <div className={divStyle}>
        <p className="text-xl">성별</p>
        {isUserDataChangeActive ? (
          <div className="flex gap-7 px-3">
            {genderOptions.map(genderOption => {
              return (
                <label
                  key={genderOption.value}
                  className="flex items-center space-x-2 pb-5 accent-darkGray"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={genderOption.value}
                    className="w-3"
                    onChange={handleGenderChange}
                    checked={newGender === genderOption.value} // 기본값 설정
                  />
                  <span className="h-4 text-sm text-darkGray align-middle">
                    {genderOption.label}
                  </span>
                </label>
              );
            })}
          </div>
        ) : (
          <p className="text-darkerGray">
            {userData?.gender == 'male'
              ? '남성'
              : userData?.gender == 'female'
              ? '여성'
              : '선택 안 함'}
          </p>
        )}
      </div>

      <div className="flex gap-2 self-end text-darkerGray">
        {isUserDataChangeActive ? (
          <Button
            label="취소"
            type="button"
            onClick={() => {
              setIsUserDataChangeActive(false); // 수정 취소
              reset({
                nickname: userData?.nickname, // 초기값 원래대로
              });
            }}
            className="bg-lighterGray text-darkerGray"
          />
        ) : null}
        <Button
          label={isUserDataChangeActive ? '저장' : '변경'}
          type="button"
          onClick={() => {
            if (isUserDataChangeActive) {
              const newNickname = getValues('nickname');
              if (newNickname !== userData?.nickname) {
                // 닉네임 변경 시
                handleSubmit(handleSave)();
              } else if (newBirthday !== userData?.birthday || newGender !== userData?.gender) {
                // 닉네임 변경 없이 다른 데이터만 업데이트
                handleSaveWithoutNickname();
              } else {
                setIsUserDataChangeActive(false);
              }
            } else {
              setIsUserDataChangeActive(true);
            }
          }}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default UserDataForm;
