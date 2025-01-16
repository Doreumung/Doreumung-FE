'use client';

import { useAppDispatch } from '@/store/hooks';
import { resetMyTravelPage, resetReviewPage } from '@/store/pageSlice';
import { resetSortState } from '@/store/sortSlice';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ResetSortAndPage = () => {
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const isReviewDetailPage = pathname.startsWith('/travel-reviews/detail');
    const isReviewListPage = pathname === '/travel-reviews';
    const isMyTravelDetailPage = pathname.startsWith('/my-travel/');
    const isReviewCreatePage = pathname.startsWith('/travel-reviews/create');
    const isMyTravelPage = pathname === '/my-travel/';

    if (!isReviewDetailPage && !isReviewListPage) {
      dispatch(resetSortState());
      dispatch(resetReviewPage());
    }
    if (!isReviewDetailPage && !isMyTravelDetailPage && !isReviewCreatePage && !isMyTravelPage) {
      dispatch(resetMyTravelPage());
    }
  }, [pathname, dispatch]);

  return null;
};

export default ResetSortAndPage;
