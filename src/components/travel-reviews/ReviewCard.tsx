import { ReviewInReviewListType } from '@/app/travel-reviews/types';
import { Heart, MessageCircleMore, Star } from 'lucide-react';
import { REVIEW_INFO_STYLES } from './constants';
import Link from 'next/link';

const ReviewCard = ({ review }: { review: ReviewInReviewListType }) => {
  return (
    <div className="w-full max-w-72 h-[400px] border border-darkerGray rounded-2xl bg-white text-darkerGray overflow-hidden ">
      <Link href={`travel-reviews/detail/${review.review_id}`}>
        <section className="h-2/3 border-b border-darkerGray bg-fadedSkyblue">
          {/* 후기 대표 사진 삽입 필요*/}
        </section>
      </Link>

      <section className="flex flex-col gap-1 w-full h-1/3 px-4 py-3">
        <div className={REVIEW_INFO_STYLES}>
          <Star className="fill-yellow" size={17} />
          <span>{review.rating}</span>
        </div>

        <Link href={`travel-reviews/detail/${review.review_id}`} className="flex-grow">
          <span className="text-lg text-foreground">{review.title}</span>
        </Link>

        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className={REVIEW_INFO_STYLES}>
              <MessageCircleMore size={17} className="fill-fadedGreen" />
              <span>{review.comment_count}</span>
            </div>
            <div className={REVIEW_INFO_STYLES}>
              <Heart size={17} className="fill-fadedOrange" />
              <span>{review.like_count}</span>
            </div>
          </div>

          <span className="text-sm">{review.nickname}</span>
        </div>
      </section>
    </div>
  );
};

export default ReviewCard;
