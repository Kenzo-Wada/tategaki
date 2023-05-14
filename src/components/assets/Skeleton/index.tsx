import { Skeleton as MantineSkeleton } from '@mantine/core';
import type { SkeletonProps as MantineSkeletonProps } from '@mantine/core';
import { memo } from 'react';

type SkeletonProps = MantineSkeletonProps;

const Skeleton = memo((props: SkeletonProps) => {
  return <MantineSkeleton {...props} />;
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
