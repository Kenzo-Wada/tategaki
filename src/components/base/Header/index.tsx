import { memo } from 'react';

import Group from '~/components/assets/Group';
import Header from '~/components/assets/Header';
import FilledButton from '~/components/base/Button/FilledButton';
import Navigation from '~/components/base/Header/Navigation';
import H2 from '~/components/base/Title/H2';
import useAuth from '~/hooks/useAuth';

const BaseHeader = memo(() => {
  const { signIn } = useAuth();

  return (
    <Header height={'80px'}>
      <Group position="apart" align="center" h={'100%'} p="lg">
        <H2>時遊文庫</H2>
        <Navigation />
        <FilledButton onClick={() => signIn()}>ログイン</FilledButton>
      </Group>
    </Header>
  );
});

BaseHeader.displayName = 'BaseHeader';

export default BaseHeader;
