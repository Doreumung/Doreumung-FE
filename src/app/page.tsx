'use client';

import useScrollBackgroundColor from '@/hooks/useScrollBackgroundColor';
import Introduction from '@/components/landingPage/introduction/Introduction';
import ReviewSwiper from '@/components/landingPage/review/ReviewSwiper';

const Home = () => {
  useScrollBackgroundColor([237, 237, 237], [208, 229, 241], 1000);

  return (
    <div className="flex flex-col gap-96 w-full h-full">
      <Introduction />
      <ReviewSwiper />
    </div>
  );
};

export default Home;
