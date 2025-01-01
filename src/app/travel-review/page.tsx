'use client';

import ReviewCard from '@/components/travel-review/ReviewCard';
import { REVIEW_LIST } from './constants';

const Page = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="block py-12 text-darkerGray text-3xl">여행 후기</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full">
        {REVIEW_LIST.map(review => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Page;
