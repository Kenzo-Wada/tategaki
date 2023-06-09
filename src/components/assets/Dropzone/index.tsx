import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import type { DropzoneProps as MantineDropzoneProps } from '@mantine/dropzone';
import { memo } from 'react';

type DropzoneProps = MantineDropzoneProps;

const Dropzone = memo((props: DropzoneProps) => {
  return <MantineDropzone {...props} />;
});

Dropzone.displayName = 'Dropzone';

export default Dropzone;
