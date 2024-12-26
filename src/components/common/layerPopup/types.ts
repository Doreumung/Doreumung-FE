import { VariantProps } from 'class-variance-authority';
import { layerPopupVariants } from './LayerPopupStyles';
import { HTMLAttributes } from 'react';

export type LayerPopupProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof layerPopupVariants> & {
    label?: React.ReactNode;
    children?: React.ReactElement;
    onClose?: () => void;
  };
