import type { NextPage } from 'next';
import { memo } from 'react';

import HomePage from '~/components/Home';

const Home: NextPage = memo(() => {
  return <HomePage />;
});

Home.displayName = 'Home';

export default Home;
