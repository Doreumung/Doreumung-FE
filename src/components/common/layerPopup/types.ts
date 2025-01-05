import { VariantProps } from 'class-variance-authority';
import { layerPopupStyles } from './layerPopupStyles';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

export type LayerPopupProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof layerPopupStyles> & {
    label: React.ReactNode;
    type?: 'confirm' | 'confirm-only' | 'input';
    onConfirm: (title?: string) => void; // title 데이터 부모 컴포넌트로 올리기
    setShowLayerPopup: Dispatch<SetStateAction<boolean>>;
  };
