import ToolbarIcon from './ToolbarIcon';
import { Image, Redo, Undo } from 'lucide-react';
import ColorSwatches from './ColorSwatches';
import { useRef, useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import useTiptap from '@/hooks/useTiptap';
import useIsMobile from '@/hooks/useIsMobile';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ToolbarProps } from '../types';
import {
  TOOLBAR_GROUP_STYLES,
  TOOLBAR_INNER_CONTAINER_STYLES,
  TOOLBAR_OUTER_CONTAINER_STYLES,
} from '../constants';

const Toolbar = ({ editor }: ToolbarProps) => {
  const isMobile = useIsMobile();
  const { getToolbarOptions } = useTiptap();
  const colorRef = useRef<HTMLDivElement | null>(null);
  const [colorSwatchMode, setColorSwatchMode] = useState<string | null>(null);

  useOutsideClick({ ref: colorRef, callback: () => setColorSwatchMode(null) });

  if (!editor) {
    return (
      <div className={TOOLBAR_OUTER_CONTAINER_STYLES}>
        <div className={TOOLBAR_INNER_CONTAINER_STYLES}></div>
      </div>
    );
  }

  return (
    <div className={TOOLBAR_OUTER_CONTAINER_STYLES}>
      <div
        className={twMerge(
          TOOLBAR_INNER_CONTAINER_STYLES,
          'flex justify-between items-center px-5',
        )}
      >
        <section className="flex gap-5">
          <div className={TOOLBAR_GROUP_STYLES}>
            {getToolbarOptions(editor, 'heading').map((option, index) => (
              <ToolbarIcon
                key={option.type}
                icon={option.icon}
                isActive={editor.isActive('heading', { level: index + 1 })}
                onClick={() => option.action()}
              />
            ))}
          </div>
          <div className={twMerge(TOOLBAR_GROUP_STYLES, 'relative')} ref={colorRef}>
            {getToolbarOptions(editor, 'color').map(option => (
              <ToolbarIcon
                key={option.type}
                icon={option.icon}
                onClick={() => {
                  if (!colorSwatchMode) setColorSwatchMode(option.type);
                  else setColorSwatchMode(null);
                }}
              />
            ))}
            {colorSwatchMode && (
              <ColorSwatches type={colorSwatchMode} onClick={() => editor.chain().focus()} />
            )}
          </div>
          <div className={TOOLBAR_GROUP_STYLES}>
            {getToolbarOptions(editor, 'style').map(option => (
              <ToolbarIcon
                key={option.type}
                icon={option.icon}
                isActive={editor.isActive(option.type)}
                onClick={() => option.action()}
              />
            ))}
          </div>

          <div className={TOOLBAR_GROUP_STYLES}>
            {getToolbarOptions(editor, 'list').map(option => (
              <ToolbarIcon
                key={option.type}
                icon={option.icon}
                isActive={editor.isActive(option.type)}
                onClick={() => option.action()}
              />
            ))}
          </div>

          {/* 이미지 추가 구현 필요 */}
          <ToolbarIcon icon={Image} />
        </section>

        <section className={clsx(TOOLBAR_GROUP_STYLES, isMobile && 'hidden')}>
          <ToolbarIcon icon={Undo} onClick={() => editor.chain().focus().undo().run()} />
          <ToolbarIcon icon={Redo} onClick={() => editor.chain().focus().redo().run()} />
        </section>
      </div>
    </div>
  );
};

export default Toolbar;
