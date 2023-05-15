import { UnstyledButton as MantineUnstyledButton } from '@mantine/core';
import type { UnstyledButtonProps as MantineUnstyledButtonProps } from '@mantine/core';
import type { MouseEvent } from 'react';
import { memo } from 'react';

type UnstyledButtonProps = MantineUnstyledButtonProps & {
  onClick?: (event: MouseEvent) => void;
};

const UnstyledButton = memo((props: UnstyledButtonProps) => {
  return <MantineUnstyledButton {...props} />;
});

UnstyledButton.displayName = 'UnstyledButton';

export default UnstyledButton;
