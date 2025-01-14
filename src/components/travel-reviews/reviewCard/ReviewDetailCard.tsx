import { GetReviewDetailResponseType } from '@/app/travel-reviews/types';
import { removePropertiesFromHtml } from '@/utils/utils';
import Link from 'next/link';

const ReviewDetailCard = ({
  review: { review_id, title, content, themes },
}: {
  review: GetReviewDetailResponseType;
}) => {
  return (
    <section className="flex flex-col justify-center gap-3 w-full h-full md:min-h-72">
      <h3 className="text-lg font-bold hover:text-blue">
        <Link href={`/travel-reviews/detail/${review_id}`}>{title}</Link>
      </h3>
      <div
        className="text-darkerGray text-sm leading-7"
        dangerouslySetInnerHTML={{ __html: removePropertiesFromHtml(content) }}
      />
      <div className="flex gap-1">
        {themes.map(theme => (
          <span className="px-1 py-px text-sm text-darkGray" key={`${review_id}-${theme}`}>
            #{theme}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ReviewDetailCard;
