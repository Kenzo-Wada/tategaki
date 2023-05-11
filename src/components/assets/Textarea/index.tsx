import { Textarea as MantineTextarea } from '@mantine/core';
import type { TextareaProps as MantineTextareaProps } from '@mantine/core';
import { memo } from 'react';

type TextareaProps = MantineTextareaProps;

const Textarea = memo((props: TextareaProps) => {
  return <MantineTextarea {...props} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;
