import { SingleReviewType } from '@/app/travel-reviews/types';
import { Heart, MessageCircleMore, Star } from 'lucide-react';
import Link from 'next/link';
import ReviewStats from './ReviewStats';

const ReviewCard = ({ review }: { review: SingleReviewType }) => {
  return (
    <div className="w-full max-w-80 h-[400px] border border-darkerGray rounded-2xl bg-white text-darkerGray overflow-hidden ">
      <Link href={`travel-reviews/detail/${review.review_id}`}>
        <section className="h-2/3 border-b border-darkerGray bg-fadedSkyblue">
          {/* 후기 대표 사진 삽입 필요*/}
        </section>
      </Link>

      <section className="flex flex-col gap-1 w-full h-1/3 px-4 py-3">
        <ReviewStats stats={review.rating} color="yellow" icon={Star} />

        <Link href={`travel-reviews/detail/${review.review_id}`} className="flex-grow">
          <span className="text-lg text-foreground">{review.title}</span>
        </Link>

        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <ReviewStats stats={review.comment_count} color="fadedGreen" icon={MessageCircleMore} />
            <ReviewStats stats={review.like_count} color="fadedOrange" icon={Heart} />
          </div>

          <span className="text-sm">{review.nickname}</span>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;
