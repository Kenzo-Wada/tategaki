import { Text as MantineText } from '@mantine/core';
import type { TextProps as MantineTextProps } from '@mantine/core';
import { memo } from 'react';

type TextProps = MantineTextProps;

const Text = memo((props: TextProps) => {
  return <MantineText {...props} />;
});

Text.displayName = 'Text';

export default Text;
