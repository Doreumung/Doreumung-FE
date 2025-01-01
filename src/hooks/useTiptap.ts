import { useEditor, Editor, ChainedCommands } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import CharacterCount from '@tiptap/extension-character-count';
import Image from '@tiptap/extension-image';
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  LucideIcon,
  Paintbrush,
  Strikethrough,
  Underline as UnderlineIcon,
} from 'lucide-react';
import { Level, ToolbarGroups } from './types';

const HEADING_CLASSES: Record<Level, string> = {
  1: 'text-2xl',
  2: 'text-xl',
  3: 'text-lg',
};

const LIMIT = 3000;

const useTiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Underline,
      Image,
      Color,
      TextStyle.configure({ mergeNestedSpanStyles: true }),
      Highlight.configure({ multicolor: true }),
      Heading.configure({
        levels: [1, 2, 3],
      }).extend({
        renderHTML({ node }) {
          const level: Level = node.attrs.level;
          const baseClass = 'font-bold';
          const sizeClass = HEADING_CLASSES[level] || 'text-base';
          return [`h${level}`, { class: `${baseClass} ${sizeClass}` }, 0];
        },
      }),
      CharacterCount.configure({ limit: LIMIT }),
    ],
    editorProps: {
      attributes: {
        class: 'h-full p-4 prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl',
      },
    },
    immediatelyRender: false,
  });

  const getToolbarOptions = (
    editor: Editor,
    group: ToolbarGroups,
  ): Array<{ type: string; icon: LucideIcon; action: () => boolean | ChainedCommands }> => {
    const focusEditor = () => editor.chain().focus();

    switch (group) {
      case 'heading':
        return [
          {
            type: 'h1',
            icon: Heading1,
            action: () => focusEditor().toggleHeading({ level: 1 }).run(),
          },
          {
            type: 'h2',
            icon: Heading2,
            action: () => focusEditor().toggleHeading({ level: 2 }).run(),
          },
          {
            type: 'h3',
            icon: Heading3,
            action: () => focusEditor().toggleHeading({ level: 3 }).run(),
          },
        ];
      case 'color':
        return [
          { type: 'text', icon: Paintbrush, action: () => focusEditor() },
          { type: 'highlight', icon: Highlighter, action: () => focusEditor() },
        ];
      case 'style':
        return [
          { type: 'bold', icon: Bold, action: () => focusEditor().toggleBold().run() },
          { type: 'italic', icon: Italic, action: () => focusEditor().toggleItalic().run() },
          {
            type: 'underline',
            icon: UnderlineIcon,
            action: () => focusEditor().toggleUnderline().run(),
          },
          { type: 'strike', icon: Strikethrough, action: () => focusEditor().toggleStrike().run() },
        ];
      default:
        throw new Error('Invalid Toolbar Group');
    }
  };

  return { editor, getToolbarOptions };
};

export default useTiptap;
