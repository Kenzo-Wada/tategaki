import { Menu as MantineMenu } from '@mantine/core';
import type { MenuItemProps as MantineMenuItemProps } from '@mantine/core';
import { memo } from 'react';

type MenuItemProps = MantineMenuItemProps;

const MenuItem = memo((props: MenuItemProps) => {
  return <MantineMenu.Item {...props} />;
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
