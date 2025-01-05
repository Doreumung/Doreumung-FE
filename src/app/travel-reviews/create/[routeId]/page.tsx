'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="reviewList" />
      <h3 className="block py-12 text-darkerGray text-3xl">후기 작성</h3>
      <ReviewForm mode="create" />
    </div>
  );
};

export default Page;
