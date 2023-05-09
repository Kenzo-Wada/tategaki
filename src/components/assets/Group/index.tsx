import { Group as MantineGroup } from '@mantine/core';
import type { GroupProps as MantineGroupProps } from '@mantine/core';
import { memo } from 'react';

type GroupProps = MantineGroupProps;

const Group = memo((props: GroupProps) => {
  return <MantineGroup {...props} />;
});

Group.displayName = 'Group';

export default Group;
