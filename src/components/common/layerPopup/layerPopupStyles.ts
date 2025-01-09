import { cva } from 'class-variance-authority';

export const layerPopupStyles = cva(
  'w-[calc(100%-32px)] md:w-[535px] max-w-[535px] border border-darkerGray text-darkerGray rounded-2xl bg-background',
);
