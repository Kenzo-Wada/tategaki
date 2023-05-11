import { memo } from 'react';

import FilledButton from '~/components/base/Button/FilledButton';
import useAuth from '~/hooks/useAuth';

const Guest = memo(() => {
  const { signIn } = useAuth();

  return <FilledButton onClick={() => signIn()}>ログイン</FilledButton>;
});

Guest.displayName = 'Guest';

export default Guest;
