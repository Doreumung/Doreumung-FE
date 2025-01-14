import { setCookie } from 'nookies';

// 쿠키 설정 함수
export const setCookieWithExpiry = (
  name: string,
  value: string,
  maxAge: number, // 초 단위
) => {
  const expiryDate = new Date(Date.now() + maxAge * 1000); // 현재 시간 + maxAge
  setCookie(null, name, value, {
    maxAge,
    path: '/',
  });

  // 로컬 스토리지에 만료 시간 저장
  localStorage.setItem(`${name}_expiry`, expiryDate.toISOString());
};
