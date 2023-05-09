import { memo } from 'react';

import Header from '~/components/assets/Header';
import theme from '~/theme/theme';

const BaseHeader = memo(() => {
  return (
    <Header height={'50px'} style={{color: 'red'}}>時遊文庫</Header>
  );
});

BaseHeader.displayName = 'BaseHeader';

export default BaseHeader;
