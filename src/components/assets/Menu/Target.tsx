import { Menu as MantineMenu } from '@mantine/core';
import type { MenuTargetProps as MantineMenuTargetProps } from '@mantine/core';
import { memo } from 'react';

type MenuTargetProps = MantineMenuTargetProps;

const MenuTarget = memo((props: MenuTargetProps) => {
  return <MantineMenu.Target {...props} />;
});

MenuTarget.displayName = 'MenuTarget';

export default MenuTarget;
