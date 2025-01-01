import { z } from 'zod';

export const passwordChangeSchema = z
  .object({
    password: z
      .string()
      .nonempty('새로운 비밀번호를 입력해 주세요.')
      .trim()
      .max(12, '비밀번호는 6자 이상, 12자 이하로 입력 가능합니다.')
      .min(6, '비밀번호는 6자 이상, 12자 이하로 입력 가능합니다.')
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,12}$/, {
        message: `비밀번호는 영문, 숫자, 특수문자를 포함하여야 합니다.`,
      }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type PasswordChangeSchema = z.infer<typeof passwordChangeSchema>;
