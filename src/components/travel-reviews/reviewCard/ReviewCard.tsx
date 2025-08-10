import { SingleReviewType } from '@/app/travel-reviews/types';
import { Heart, MessageCircleMore, Star } from 'lucide-react';
import Link from 'next/link';
import ReviewStats from './ReviewStats';
import clsx from 'clsx';
import Image from 'next/image';

const ReviewCard = ({
  review: { review_id, rating, title, comment_count, like_count, nickname, thumbnail },
}: {
  review: SingleReviewType;
}) => {
  return (
    <div className="w-full max-w-80 h-[400px] border border-darkerGray rounded-2xl bg-white text-darkerGray overflow-hidden transition duration-300 ease-in-out hover:rotate-1 active:rotate-2">
      <Link
        href={`/travel-reviews/detail/${review_id}`}
        aria-labelledby={`review-title-${review_id}`}
      >
        <div
          className={clsx(
            'relative h-3/5 border-b border-darkerGray bg-background',
            !thumbnail && 'bg-dolmung bg-right-bottom bg-no-repeat bg-thumbnail',
          )}
        >
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={`${title}의 대표 사진`}
              fill
              sizes="100%"
              style={{ objectFit: 'cover' }}
              priority
            />
          )}
        </div>
        <section className="flex flex-col gap-1 w-full h-2/5 px-4 py-3">
          <ReviewStats stats={rating} color="yellow" icon={Star} />
          <span
            id={`review-title-${review_id}`}
            className="flex-grow text-lg text-foreground line-clamp-2"
          >
            {title}
          </span>
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <ReviewStats stats={comment_count} color="fadedGreen" icon={MessageCircleMore} />
              <ReviewStats stats={like_count} color="fadedOrange" icon={Heart} />
            </div>
            <span className="text-sm">{nickname}</span>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default ReviewCard;
