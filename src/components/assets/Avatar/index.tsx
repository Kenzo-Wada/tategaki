import { Avatar as MantineAvatar } from '@mantine/core';
import type { AvatarProps as MantineAvatarProps } from '@mantine/core';
import { memo } from 'react';

type AvatarProps = MantineAvatarProps;

const Avatar = memo((props: AvatarProps) => {
  return <MantineAvatar {...props} />;
});

Avatar.displayName = 'Avatar';

export default Avatar;
