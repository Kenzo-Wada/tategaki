import { memo } from 'react';

import Group from '~/components/assets/Group';
import Header from '~/components/assets/Header';
import Navigation from '~/components/base/Header/Navigation';
import Profile from '~/components/base/Header/Profile';
import H2 from '~/components/base/Title/H2';

const BaseHeader = memo(() => {
  return (
    <Header height={'80px'}>
      <Group position="apart" align="center" h={'100%'} p="lg">
        <Group spacing={'xl'}>
          <H2>Tategaki</H2>
          <Navigation />
        </Group>
        <Profile />
      </Group>
    </Header>
  );
});

BaseHeader.displayName = 'BaseHeader';

export default BaseHeader;
