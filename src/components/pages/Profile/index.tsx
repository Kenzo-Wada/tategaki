import { memo } from 'react';

import Stack from '~/components/assets/Stack';
import ProfileTabs from '~/components/pages/Profile/Tabs';
import UserDetail from '~/components/pages/Profile/UserDetail';

const ProfilePageComponent = memo(() => {
  return (
    <Stack>
      <UserDetail />
      <ProfileTabs />
    </Stack>
  );
});

ProfilePageComponent.displayName = 'ProfilePageComponent';

export default ProfilePageComponent;
