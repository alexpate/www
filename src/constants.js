import pusherHero from 'pages/work/pusher-dashboard/hero@2x.png';
import kaloDesignSystemHero from 'pages/work/kalo-product-ui-system/hero@2x.png';

const sharedTheme = {
  fontWeight: [300, 400, 500, 600],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  space: [0, 8, 16, 32, 64, 128, 256, 384],
};

export const theme = {
  light: {
    ...sharedTheme,
    colors: {
      theme: 'light',
      primary: '#fff',
      secondary: '#202024',
      link: '#2b32fd',
      line: '#cac4c4',
      syntax: {
        background: '#e1d7d7',
        text: '#394244',
      },
      portfolioHeroBackground: '#DEE1E9',
    },
  },
  dark: {
    ...sharedTheme,
    colors: {
      theme: 'dark',
      primary: '#202024',
      secondary: '#e7e2e2',
      link: '#2b32fd',
      line: '#282727',
      syntax: {
        background: '#1e1e1e',
        text: '#6f8186',
      },
      portfolioHeroBackground: '#2a2b2f',
    },
  },
};

/**
 * These are used as the featured images on the work portfolio pages. The keys are defined
 * within the frontmatter of the individual project markdown files.
 */
export const PROJECT_HERO_MAP = {
  pusher: pusherHero,
  kaloDesignSystem: kaloDesignSystemHero,
};
