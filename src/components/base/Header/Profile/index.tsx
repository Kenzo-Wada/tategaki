import { memo } from 'react';

import Guest from '~/components/base/Header/Profile/Guest';
import User from '~/components/base/Header/Profile/User';
import useSessionUser from '~/hooks/useSessionUser';

const Profile = memo(() => {
  const { session } = useSessionUser();

  return session ? <User /> : <Guest />;
});

Profile.displayName = 'Profile';

export default Profile;
