import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['GumiRomanceTTF'],
        default: ['GmarketSansMedium'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        overlay: 'var(--overlay)',
        darkerGray: 'hsl(var(--darker-gray))',
        darkGray: 'hsl(var(--dark-gray))',
        lighterGray: 'hsl(var(--lighter-gray))',
        lightGray: 'hsl(var(--light-gray))',
        logo: 'hsl(var(--logo))',
        yellow: 'hsl(var(--yellow))',
        green: 'hsl(var(--green))',
        blue: 'hsl(var(--blue))',
        skyblue: 'hsl(var(--skyblue))',
        fadedOrange: 'hsl(var(--faded-orange))',
        fadedYellow: 'hsl(var(--faded-yellow))',
        fadedSkyblue: 'hsl(var(--faded-skyblue))',
        fadedGreen: 'hsl(var(--faded-green))',
        kakaoContainer: 'hsl(var(--kakao-container))',
        kakaoLabel: 'var(--kakao-label)',
        naverContainer: 'hsl(var(--naver-container))',
        naverLabel: 'hsl(var(--naver-label))',
        googleContainer: 'hsl(var(--google-container))',
        googleLabel: 'var(--google-label)',
      },
      dropShadow: {
        button: '3px 3px 0 hsl(var(--foreground))',
      },
    },
  },
  plugins: [],
} satisfies Config;
