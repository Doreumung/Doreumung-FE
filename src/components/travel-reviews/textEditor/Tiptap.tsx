'use client';

import { EditorContent } from '@tiptap/react';
import { TiptapProps } from '../types';

const Tiptap = ({ editor }: TiptapProps) => {
  return (
    <div>
      <EditorContent
        editor={editor}
        className="w-full h-[640px] border border-t-0 border-green rounded-b-2xl bg-white overflow-scroll scrollbar-hide md:h-[768px]"
      />
    </div>
  );
};

export default Tiptap;
