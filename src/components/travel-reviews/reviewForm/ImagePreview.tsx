import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

const ImagePreview = ({
  thumbnailImageUrl,
  setThumbnailImageUrl,
}: {
  thumbnailImageUrl: string;
  setThumbnailImageUrl: Dispatch<SetStateAction<string>>;
}) => {
  const imagesInEditor = useAppSelector(state => state.reviewImages.currentImages);

  return (
    <section>
      <h4 className="pl-2 pb-2">사진 미리보기</h4>
      <div className="overflow-x-auto w-full min-h-32 p-3 border border-green rounded-2xl bg-white">
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
                <div className="absolute top-0 left-0 px-1 border border-darkerGray rounded-md bg-yellow text-sm">
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

export default ImagePreview;
