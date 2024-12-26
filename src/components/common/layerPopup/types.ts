import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { layerPopupVariants } from './layerPopupStyles';

export type LayerPopupProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof layerPopupVariants> & {
    label?: React.ReactNode;
    children?: React.ReactElement;
    onClose?: () => void;
  };
