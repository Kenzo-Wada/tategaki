import { ActionIcon as MantineActionIcon } from '@mantine/core';
import type { ActionIconProps as MantineActionIconProps } from '@mantine/core';
import { memo } from 'react';

type ActionIconProps = MantineActionIconProps;

const ActionIcon = memo((props: ActionIconProps) => {
  return <MantineActionIcon {...props} />;
});

ActionIcon.displayName = 'ActionIcon';

export default ActionIcon;
