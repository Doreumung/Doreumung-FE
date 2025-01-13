import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import Image from 'next/image';
import { ThumbnailPickerProps } from '../types';
import { useEffect } from 'react';

const ThumbnailPicker = ({ thumbnailImageUrl, setThumbnailImageUrl }: ThumbnailPickerProps) => {
  const imagesInEditor = useAppSelector((state: RootState) => state.reviewImages.currentImages);

  useEffect(() => {
    if (!thumbnailImageUrl && imagesInEditor) setThumbnailImageUrl(imagesInEditor[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesInEditor]);

  return (
    <section>
      <h4 className="pl-2 pb-2">대표 사진 설정</h4>
      <div className="content-center overflow-x-auto w-full h-32 px-4 border border-green rounded-2xl bg-white ">
        <div className="flex items-center gap-3 w-max">
          {imagesInEditor.map((url, index) => (
            <div
              key={`${index}-${url}`}
              className="shrink-0 relative size-24 cursor-pointer"
              onClick={() => setThumbnailImageUrl(imagesInEditor[index])}
            >
              <Image
                src={url}
                alt={url.split('com/')[1]}
                fill
                sizes="96"
                style={{ objectFit: 'cover' }}
                className="transition duration-300 hover:scale-105"
              />
              {(url === thumbnailImageUrl || (!thumbnailImageUrl && index === 0)) && (
                <div className="absolute top-1 left-1 px-1 border border-darkerGray rounded-md bg-yellow text-sm">
                  대표
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThumbnailPicker;
