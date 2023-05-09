import type { MantineThemeOverride } from "@mantine/core";

import globalStyles from "~/theme/globalStyles";

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  globalStyles: () => globalStyles
}

export default theme;