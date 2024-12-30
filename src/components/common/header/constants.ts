export const INPUT_RANGE = [0, 0.3, 1];

export const HEADER_HEIGHT = {
  default: {
    web: '80px',
    mobile: '64px',
  },
  motion: {
    web: '160px',
    mobile: '112px',
  },
} as const;

export const LOGO_STYLES = {
  position: 'absolute',
  text: {
    bottom: '8px',
    default: {
      web: {
        width: '128px',
        marginLeft: '32px',
      },
      mobile: {
        width: '112px',
        marginLeft: '16px',
      },
    },
    motion: {
      web: {
        width: '176px',
        marginLeft: '128px',
      },
      mobile: {
        width: '144px',
        marginLeft: '72px',
      },
    },
  },
  image: {
    default: {
      web: {
        width: '48px',
        left: '160px',
        bottom: '12px',
        transform: 'rotate(360deg)',
      },
      mobile: {
        width: '40px',
        left: '128px',
        bottom: '12px',
        transform: 'rotate(360deg)',
      },
    },
    motion: {
      web: {
        width: '56px',
        left: '288px',
        bottom: '55px',
        transform: 'rotate(0)',
      },
      mobile: {
        width: '48px',
        left: '208px',
        bottom: '55px',
        transform: 'rotate(0)',
      },
    },
  },
} as const;
