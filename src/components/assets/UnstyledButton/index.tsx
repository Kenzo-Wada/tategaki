import { UnstyledButton as MantineUnstyledButton } from '@mantine/core';
import type { UnstyledButtonProps as MantineUnstyledButtonProps } from '@mantine/core';
import { memo } from 'react';

type UnstyledButtonProps = MantineUnstyledButtonProps;

const UnstyledButton = memo((props: UnstyledButtonProps) => {
  return <MantineUnstyledButton {...props} />;
});

UnstyledButton.displayName = 'UnstyledButton';

export default UnstyledButton;
