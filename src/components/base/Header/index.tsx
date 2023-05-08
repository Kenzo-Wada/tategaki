import { memo } from 'react';

import Header from '~/components/assets/Header';

const BaseHeader = memo(() => {
  return (
    <Header height={'50px'}>時遊文庫</Header>
  );
});

BaseHeader.displayName = 'BaseHeader';

export default BaseHeader;
