import { AppShell as MantineAppshell } from '@mantine/core';
import type { AppShellProps as MantineAppShellProps } from '@mantine/core';
import { memo } from 'react';

type AppShellProps = MantineAppShellProps;

const Appshell = memo((props: AppShellProps) => {
  return <MantineAppshell {...props} />;
});

Appshell.displayName = 'Appshell';

export default Appshell;
