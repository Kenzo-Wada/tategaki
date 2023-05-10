import { memo } from 'react';

import Post from '~/components/pages/Home/Posts';

const HomePage = memo(() => {
  return <Post />;
});

HomePage.displayName = 'HomePage';

export default HomePage;
