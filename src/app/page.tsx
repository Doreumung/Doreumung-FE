'use client';

import Button from '@/components/common/buttons/Button';
import ReviewDetailCard from '@/components/travel-reviews/reviewCard/ReviewDetailCard';
import useIsMobile from '@/hooks/useIsMobile';
import useScrollBackgroundColor from '@/hooks/useScrollBackgroundColor';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { BEST_REVIEWS } from './mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGetReviewListQuery } from '@/api/reviewApi';
import ReviewCard from '@/components/travel-reviews/reviewCard/ReviewCard';
import LoadingSpinner from '@/components/common/loadingSpinner/LoadingSpinner';
import ApiErrorMessage from '@/components/common/errorMessage/ApiErrorMessage';
import 'swiper/css';
import 'swiper/css/navigation';


const Home = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, error } = useGetReviewListQuery({
    page: 1,
    size: 12,
    order_by: 'like_count',
    order: 'desc',
  });
  console.log(data);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const paddingTop = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [isMobile ? '112px' : '160px', '0px', '0px'],
  );

  useScrollBackgroundColor([237, 237, 237], [208, 229, 241], 1000);


  return (
    <div className="w-full min-h-screen -mt-16 md:-mt-20">
      <motion.div
        className="flex flex-col items-center w-full h-screen md:flex-row md:justify-between md:items-end"
        style={{ paddingTop }}
      >
        <div className="w-full h-full text-center content-center md:w-3/4">도르멍 이용 방법</div>
        <div className="flex justify-center self-end w-full pb-20 md:w-1/4 ">
          <Button
            size={isMobile ? 'md' : 'lg'}
            color="green"
            label="일정 생성하기"
            shadow="dropShadow"
            onClick={() => router.push('/travel-plan')}
          />
        </div>
      </motion.div>

      <div className="h-96" />

      <div className="flex flex-col items-center gap-20 w-full min-h-screen">
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
          className="flex items-center relative w-full max-w-4xl px-0 md:px-10"
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s',
          }}
        >
          <button className="prevEl hidden absolute top-1/2 -translate-y-1/2 left-0 md:block">
            <ChevronLeft size={36} strokeWidth={3} className="text-green hover:scale-110" />
          </button>
          <button className="nextEl hidden absolute top-1/2 -translate-y-1/2 right-0 md:block">
            <ChevronRight size={36} strokeWidth={3} className="text-green hover:scale-110" />
          </button>

          <Swiper
            className="flex justify-center items-center w-full max-w-3xl"
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            centeredSlides={true}
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

        <div className="h-10" />

        {isLoading && <LoadingSpinner />}
        {error && <ApiErrorMessage />}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-8 w-full max-w-4xl">
          {data &&
            data.reviews.map(review => <ReviewCard key={review.review_id} review={review} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
