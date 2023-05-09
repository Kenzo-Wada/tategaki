import { TextInput as MantineTextInput } from '@mantine/core';
import type { TextInputProps as MantineTextInputProps } from '@mantine/core';
import { memo } from 'react';

type TextInputProps = MantineTextInputProps;

const TextInput = memo((props: TextInputProps) => {
  return <MantineTextInput {...props} />;
});

TextInput.displayName = 'TextInput';

export default TextInput;
