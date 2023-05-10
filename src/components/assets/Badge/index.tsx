import { Badge as MantineBadge } from '@mantine/core';
import type { BadgeProps as MantineBadgeProps } from '@mantine/core';
import { memo } from 'react';

export type BadgeProps = MantineBadgeProps;

export const Badge = memo((props: BadgeProps) => {
  return <MantineBadge {...props} />;
});

Badge.displayName = 'Badge';
