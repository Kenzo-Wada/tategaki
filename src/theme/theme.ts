import type { MantineThemeOverride } from '@mantine/core';

import globalStyles from '~/theme/globalStyles';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    primary: ['#E2FAF1', '#C6F5E3', '#AAEFD5', '#8EEAC7', '#72E5B9', '#56E0AB', '#1FAD8F', '#1A8B72', '#156955', '#114738'],
  },
  primaryColor: 'primary',
  globalStyles: () => globalStyles,
};

export default theme;
