import type { PasswordInputProps as MantinePasswordInputProps } from '@mantine/core';
import { PasswordInput as MantinePasswordInput } from '@mantine/core';
import { memo } from 'react';

type PasswordInputProps = MantinePasswordInputProps;

const PasswordInput = memo((props: PasswordInputProps) => {
  return <MantinePasswordInput {...props} />;
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
