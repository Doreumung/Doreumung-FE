import { cva } from 'class-variance-authority';

export const toggleStyles = cva('rounded-2xl border border-darkerGray', {
  variants: {
    size: {
      md: 'shrink-0 min-w-20 h-10 px-3 text-base md:min-w-24 md:px-5 md:text-lg',
      sm: 'shrink-0 w-20 h-9 text-base',
    },
    color: {
      orange: '',
      fadedOrange: '',
      yellow: '',
      fadedYellow: '',
      green: '',
      fadedGreen: '',
      skyblue: '',
      fadedSkyblue: '',
    },
    checked: {
      true: '',
      false: 'bg-lighterGray text-darkerGray',
    },
    disabled: {
      true: '!bg-darkerGray !text-lighterGray',
      false: '',
    },
  },
  compoundVariants: [
    { color: 'orange', checked: false, class: 'hover:bg-logo' },
    { color: 'fadedOrange', checked: false, class: 'hover:bg-fadedOrange' },
    { color: 'yellow', checked: false, class: 'bg-yellow' },
    { color: 'fadedYellow', checked: false, class: 'hover:bg-fadedYellow' },
    { color: 'green', checked: false, class: 'hover:bg-green' },
    { color: 'fadedGreen', checked: false, class: 'hover:bg-fadedGreen' },
    { color: 'skyblue', checked: false, class: 'hover:bg-skyblue' },
    { color: 'fadedSkyblue', checked: false, class: 'hover:bg-fadedSkyblue' },
    { color: 'orange', checked: true, class: 'bg-logo text-darkerGray' },
    { color: 'fadedOrange', checked: true, class: 'bg-fadedOrange text-darkerGray' },
    { color: 'yellow', checked: true, class: 'bg-lighterGray text-darkerGray hover:bg-yellow' },
    { color: 'fadedYellow', checked: true, class: 'bg-fadedYellow text-darkerGray' },
    { color: 'green', checked: true, class: 'bg-green text-darkerGray' },
    { color: 'fadedGreen', checked: true, class: 'bg-fadedGreen text-darkerGray' },
    { color: 'skyblue', checked: true, class: 'bg-skyblue text-darkerGray' },
    { color: 'fadedSkyblue', checked: true, class: 'bg-fadedSkyblue text-darkerGray' },
  ],
  defaultVariants: {
    size: 'md',
    checked: false,
    disabled: false,
  },
});
