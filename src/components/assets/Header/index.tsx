import { Header as MantineHeader } from '@mantine/core';
import type { HeaderProps as MantineHeaderProps } from '@mantine/core';
import { memo } from 'react';

type HeaderProps = MantineHeaderProps;

const Header = memo((props: HeaderProps) => {
  return <MantineHeader {...props} />;
});

Header.displayName = 'Header';

export default Header;
