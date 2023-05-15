import type { NextPage } from 'next';
import { memo } from 'react';

import ProfilePageComponent from '~/components/pages/Profile';

const ProfilePage: NextPage = memo(() => {
  return <ProfilePageComponent />;
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
