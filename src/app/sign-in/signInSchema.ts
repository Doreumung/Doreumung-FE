import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty('이메일을 입력해주세요.') // 필수 입력
    .email('유효한 이메일 주소를 입력해주세요.'), // 형식 검사
  password: z
    .string()
    .trim()
    .max(12, '비밀번호는 6자 이상, 12자 이하로 입력 가능합니다.')
    .min(6, '비밀번호는 6자 이상, 12자 이하로 입력 가능합니다.')
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/, {
      message: `비밀번호는 영문, 숫자, 특수문자를 포함하여야 합니다.`,
    }),
});

export type SignInSchema = z.infer<typeof signInSchema>; //
