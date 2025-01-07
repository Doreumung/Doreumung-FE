'use client';

import RedirectNotice from '@/components/common/redirectNotice/RedirectNotice';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const query = useSearchParams().get('mode') || 'NOT_FOUND';
  const mode = query === 'SIGNED_IN' || query === 'NOT_SIGNED_IN' ? query : 'NOT_FOUND';

  return <RedirectNotice mode={mode} />;
};

export default Page;
