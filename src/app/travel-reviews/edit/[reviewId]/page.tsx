'use client';

import BackNavigation from '@/components/common/backNavigation/BackNavigation';
import ReviewForm from '@/components/travel-reviews/reviewForm/ReviewForm';
import { useParams } from 'next/navigation';

const Page = () => {
  const { reviewId } = useParams();
  return (
    <div className="flex flex-col items-center w-full">
      <BackNavigation to="review" reviewId={reviewId as string} />
      <h3 className="block py-12 text-darkerGray text-3xl">후기 수정</h3>
      <ReviewForm mode="edit" />
    </div>
  );
};

export default Page;
