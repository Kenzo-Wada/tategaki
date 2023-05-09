import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';
import { memo } from 'react';

export type ButtonProps = MantineButtonProps & {
  onClick?: () => void;
};

export const Button = memo((props: ButtonProps) => {
  return <MantineButton {...props} />;
});

Button.displayName = 'Button';
