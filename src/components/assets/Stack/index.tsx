import { Stack as MantineStack } from '@mantine/core';
import type { StackProps as MantineStackProps } from '@mantine/core';
import { memo } from 'react';

type StackProps = MantineStackProps;

const Stack = memo((props: StackProps) => {
  return <MantineStack {...props} />;
});

Stack.displayName = 'Stack';

export default Stack;
