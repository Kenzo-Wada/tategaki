import type { ReactNode } from 'react';
import { memo } from 'react';

import AppShell from '~/components/assets/AppShell';
import BaseHeader from '~/components/base/Header';

interface Props {
  children: ReactNode;
}

const BaseAppShell = memo((props: Props) => {
  return (
    <AppShell padding="md" header={<BaseHeader />}>
      {props.children}
    </AppShell>
  );
});

BaseAppShell.displayName = 'BaseAppShell';

export default BaseAppShell;
