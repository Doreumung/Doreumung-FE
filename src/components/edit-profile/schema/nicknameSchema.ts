import { z } from 'zod';

export const nicknameChangeSchema = z.object({
  nickname: z
    .string()
    .min(1, '닉네임은 1글자 이상, 12글자 이하로 입력 가능합니다.')
    .max(12, '닉네임은 1글자 이상, 12글자 이하로 입력 가능합니다.'),
});

export type NicknameChangeSchema = z.infer<typeof nicknameChangeSchema>;
