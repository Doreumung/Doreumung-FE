import ToolbarIcon from './ToolbarIcon';
import { Heading, Image, Redo, Undo } from 'lucide-react';
import ColorSwatches from './ColorSwatches';
import { ChangeEvent, useRef, useState } from 'react';
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
import { headingToolStyles } from './headingToolStyles';

const Toolbar = ({ editor }: ToolbarProps) => {
  const isMobile = useIsMobile();
  const { getToolbarOptions } = useTiptap();
  const colorRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [colorSwatchMode, setColorSwatchMode] = useState<string | null>(null);
  const [showHeadingOptions, setShowHeadingOptions] = useState<boolean>(false);

  useOutsideClick({ ref: colorRef, callback: () => setColorSwatchMode(null) });

  useOutsideClick({ ref: headingRef, callback: () => setShowHeadingOptions(false) });

  const handleUploadImage = (e: ChangeEvent) => {
    const image = (e.target as HTMLInputElement).files as FileList;
    console.log(image);
  };

  if (!editor) {
    return (
      <div className={TOOLBAR_OUTER_CONTAINER_STYLES}>
        <div className={TOOLBAR_INNER_CONTAINER_STYLES}></div>
      </div>
    );
  }

  return (
    <div className={TOOLBAR_OUTER_CONTAINER_STYLES}>
      <div className={TOOLBAR_INNER_CONTAINER_STYLES}>
        <div className="flex gap-3 md:gap-5">
          <div ref={headingRef} className="relative">
            <ToolbarIcon
              icon={Heading}
              onClick={() => setShowHeadingOptions(prev => !prev)}
              className="md:hidden"
            />
            {((isMobile && showHeadingOptions) || !isMobile) && (
              <div className={headingToolStyles({ isMobile })}>
                {getToolbarOptions(editor, 'heading').map((option, index) => (
                  <ToolbarIcon
                    key={option.type}
                    icon={option.icon}
                    isActive={editor.isActive('heading', { level: index + 1 })}
                    onClick={() => option.action()}
                    className="p-2 border-r border-darkerGray last:border-none md:p-0 md:border-none"
                  />
                ))}
              </div>
            )}
          </div>

          <div className={twMerge(TOOLBAR_GROUP_STYLES, 'relative')} ref={colorRef}>
            {getToolbarOptions(editor, 'color').map(option => (
              <ToolbarIcon
                key={option.type}
                icon={option.icon}
                onClick={() => {
                  if (!colorSwatchMode) setColorSwatchMode(option.type);
                  else if (colorSwatchMode === option.type) setColorSwatchMode(null);
                  else {
                    setColorSwatchMode(null);
                    setTimeout(() => {
                      setColorSwatchMode(option.type);
                    }, 100);
                  }
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

          {/* 이미지 추가 시 S3에 업로드 로직 구현 필요 */}
          <div className="relative flex items-center">
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 size-5 opacity-0 file:cursor-pointer md:size-6"
              onChange={handleUploadImage}
            />
            <ToolbarIcon icon={Image} />
          </div>
        </div>

        <div className={clsx(TOOLBAR_GROUP_STYLES, isMobile && 'hidden')}>
          <ToolbarIcon icon={Undo} onClick={() => editor.chain().focus().undo().run()} />
          <ToolbarIcon icon={Redo} onClick={() => editor.chain().focus().redo().run()} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
