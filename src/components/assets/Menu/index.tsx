import { Menu as MantineMenu } from '@mantine/core';
import type { MenuProps as MantineMenuProps } from '@mantine/core';
import { memo } from 'react';

type MenuProps = MantineMenuProps;

const Menu = memo((props: MenuProps) => {
  return <MantineMenu {...props} />;
});

Menu.displayName = 'Menu';

export default Menu;
