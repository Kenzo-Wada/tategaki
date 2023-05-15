import { ActionIcon as MantineActionIcon } from '@mantine/core';
import type { ActionIconProps as MantineActionIconProps } from '@mantine/core';
import type { MouseEvent } from 'react';
import { memo } from 'react';

type ActionIconProps = MantineActionIconProps & {
  onClick?: (event: MouseEvent) => void;
};

const ActionIcon = memo((props: ActionIconProps) => {
  return <MantineActionIcon {...props} />;
});

ActionIcon.displayName = 'ActionIcon';

export default ActionIcon;
