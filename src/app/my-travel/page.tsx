import TravelCard from '@/components/my-travel/TravelCard';
import { reviews } from './reviews';

const Page = () => {
  return (
    <div className="flex flex-col items-center gap-16 pt-10 ">
      <p className="text-3xl">여행 후기</p>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map(review => (
          <TravelCard
            key={review.review_id}
            nickname={review.nickname}
            title={review.title}
            rating={review.rating}
            like_count={review.like_count}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
