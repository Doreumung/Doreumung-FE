import { z } from 'zod';

// 공통 유효성 검사 정의
const requiredField = () => z.string().nonempty(`이메일 혹은 비밀번호를 입력해주세요.`).trim();

export const signInSchema = z.object({
  email: requiredField(), // 이메일 필수 입력
  password: requiredField(), // 비밀번호 필수 입력
});

export type SignInSchema = z.infer<typeof signInSchema>;
