import { Image as MantineImage } from '@mantine/core';
import type { ImageProps as MantineImageProps } from '@mantine/core';
import { memo } from 'react';

type ImageProps = MantineImageProps;

const Image = memo((props: ImageProps) => {
  return <MantineImage {...props} />;
});

Image.displayName = 'Image';

export default Image;
