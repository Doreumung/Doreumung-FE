'use client';

import useScrollBackgroundColor from '@/hooks/useScrollBackgroundColor';
import Introduction from '@/components/landingPage/introduction/Introduction';
import ReviewSwiper from '@/components/landingPage/review/ReviewSwiper';

const Home = () => {
  useScrollBackgroundColor([237, 237, 237], [208, 229, 241], 1000);

  return (
    <div className="w-full min-h-screen pb-16 -mt-16 md:-mt-20">
      <Introduction />
      <ReviewSwiper />
    </div>
  );
};

export default Home;
