'use client';

import RedirectNotice from '@/components/common/redirectNotice/RedirectNotice';
import { RedirectMode } from '@/components/common/redirectNotice/types';
import { useEffect, useState } from 'react';

const Page = () => {
  const [mode, setMode] = useState<RedirectMode>('NOT_FOUND');
  useEffect(() => {
    const cookies = document.cookie.split('; ');
    const redirectModeCookie = cookies.find(row => row.startsWith('redirectMode='));
    const redirectMode = redirectModeCookie ? redirectModeCookie.split('=')[1] : 'NOT_FOUND';

    setMode(
      redirectMode === 'SIGNED_IN' || redirectMode === 'NOT_SIGNED_IN' ? redirectMode : 'NOT_FOUND',
    );
  }, []);

  return <RedirectNotice mode={mode} />;
};

export default Page;
