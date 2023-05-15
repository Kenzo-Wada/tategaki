import { Menu as MantineMenu } from '@mantine/core';
import type { MenuDropdownProps as MantineMenuDropdownProps } from '@mantine/core';
import { memo } from 'react';

type MenuDropdownProps = MantineMenuDropdownProps;

const MenuDropdown = memo((props: MenuDropdownProps) => {
  return <MantineMenu.Dropdown {...props} />;
});

MenuDropdown.displayName = 'MenuDropdown';

export default MenuDropdown;
