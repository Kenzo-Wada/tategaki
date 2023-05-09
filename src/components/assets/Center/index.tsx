import { Center as MantineCenter } from '@mantine/core';
import type { CenterProps as MantineCenterProps } from '@mantine/core';
import { memo } from 'react';

type CenterProps = MantineCenterProps;

const Center = memo((props: CenterProps) => {
  return <MantineCenter {...props} />;
});

Center.displayName = 'Center';

export default Center;
