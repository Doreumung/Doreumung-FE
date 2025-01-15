import { GetReviewDetailResponseType } from '@/app/travel-reviews/types';
import { removePropertiesFromHtml } from '@/utils/utils';
import Link from 'next/link';

const ReviewDetailCard = ({
  review: { review_id, title, content, themes },
}: {
  review: GetReviewDetailResponseType;
}) => {
  return (
    <section className="flex justify-center items-center w-full h-full min-h-72">
      <div className="flex flex-col items-start gap-4">
        <h3>
          <Link
            href={`/travel-reviews/detail/${review_id}`}
            className="text-blue text-xl font-bold"
          >
            {title}
          </Link>
        </h3>
        <div
          className="text-darkerGray text-base leading-8"
          dangerouslySetInnerHTML={{ __html: removePropertiesFromHtml(content) }}
        />
        <div className="flex gap-1">
          {themes.map(theme => (
            <span className="px-1 py-px text-sm text-darkGray" key={`${review_id}-${theme}`}>
              #{theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewDetailCard;
