'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import ReviewDetailCard from '@/components/landingPage/review/ReviewDetailCard';
import { BEST_REVIEWS } from '@/app/mockData';
import useIsMobile from '@/hooks/useIsMobile';
import NavigateArrows from './NavigateArrows';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import 'swiper/css';
import 'swiper/css/navigation';

const ReviewSwiper = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="flex flex-col justify-center items-center gap-20 w-full min-h-screen">
      <div
        className="relative"
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
        }}
      >
        <div
          className="absolute -bottom-20 -left-28 -z-10 w-72 h-32 bg-smallCloud bg-cover bg-center opacity-75"
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            transition: 'all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
          }}
        />
        <p className="text-2xl">도르멍 이용 후기</p>
      </div>

      <div
        ref={ref}
        className="flex justify-center items-center relative w-full max-w-6xl px-0 md:px-10"
        style={{
          opacity: isInView ? 1 : 0,
          transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
        }}
      >
        <NavigateArrows icon={ChevronLeft} className="prevEl" />
        <NavigateArrows icon={ChevronRight} className="nextEl" />

        <Swiper
          className="flex justify-center items-center w-full max-w-5xl"
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          pagination={isMobile ? pagination : false}
          navigation={{
            prevEl: '.prevEl',
            nextEl: '.nextEl',
          }}
          autoplay={{
            delay: 1000 * 10,
            disableOnInteraction: false,
          }}
          loop
        >
          <div>
            {BEST_REVIEWS.map(review => (
              <SwiperSlide key={review.review_id}>
                <ReviewDetailCard review={review} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSwiper;
