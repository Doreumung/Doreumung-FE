import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email('이메일 형식을 확인해 주세요.'),
    nickname: z
      .string()
      .min(3, '닉네임은 3글자 이상, 12글자 이하로 입력 가능합니다.')
      .max(12, '닉네임은 3글자 이상, 12글자 이하로 입력 가능합니다.'),
    password: z
      .string()
      .trim()
      .max(15, '비밀번호는 8자 이상, 15자 이하로 입력 가능합니다.')
      .min(8, '비밀번호는 8자 이상, 15자 이하로 입력 가능합니다.')
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/, {
        message: `비밀번호는 영문, 숫자, 특수문자를 포함하여야 합니다.`,
      }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>; //
