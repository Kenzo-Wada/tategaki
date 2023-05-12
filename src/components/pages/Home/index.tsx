import { memo } from 'react';

import Posts from '~/components/pages/Home/Posts';

const HomePage = memo(() => {
  return <Posts />;
});

HomePage.displayName = 'HomePage';

export default HomePage;
