import { VariantProps } from 'class-variance-authority';
import { layerPopupStyles } from './layerPopupStyles';
import { HTMLAttributes } from 'react';

export type LayerPopupProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof layerPopupStyles> & {
    label?: React.ReactNode;
    children?: React.ReactElement;
    onClose?: () => void;
  };
