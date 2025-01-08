export type UserDataType = {
  id: string | 'default-id';
  email: string | '';
  nickname: string | '';
  gender: 'male' | 'female' | 'none';
  birthday: string | '1925-01-01';
  created_at: string | '';
  updated_at: string | '';
} | null;
