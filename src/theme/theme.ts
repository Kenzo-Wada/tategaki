import type { MantineThemeOverride } from '@mantine/core';

import globalStyles from '~/theme/globalStyles';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    primary: ['#DFFAEB', '#BFF4D7', '#9FEFC3', '#80EAAF', '#60E49B', '#40DF87', '#1EAE98', '#1A8B72', '#16684C', '#124526'],
  },
  primaryColor: 'cyan',
  globalStyles: () => globalStyles,
};

export default theme;
