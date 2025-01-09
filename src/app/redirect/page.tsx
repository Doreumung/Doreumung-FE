'use client';

import RedirectNotice from '@/components/common/redirectNotice/RedirectNotice';

const Page = () => {
  const cookies = document.cookie.split('; ');
  const redirectModeCookie = cookies.find(row => row.startsWith('redirectMode='));
  const redirectMode = redirectModeCookie ? redirectModeCookie.split('=')[1] : 'NOT_FOUND';
  const mode =
    redirectMode === 'SIGNED_IN' || redirectMode === 'NOT_SIGNED_IN' ? redirectMode : 'NOT_FOUND';

  return <RedirectNotice mode={mode} />;
};

export default Page;
