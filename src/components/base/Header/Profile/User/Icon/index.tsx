import { rem } from '@mantine/core';
import Link from 'next/link';
import { memo } from 'react';

import Avatar from '~/components/assets/Avatar';
import Menu from '~/components/assets/Menu';
import MenuDropdown from '~/components/assets/Menu/Dropdown';
import MenuItem from '~/components/assets/Menu/Item';
import MenuTarget from '~/components/assets/Menu/Target';
import Stack from '~/components/assets/Stack';
import UnstyledButton from '~/components/assets/UnstyledButton';
import { IconLogout } from '~/components/icon/Logout';
import { IconUser } from '~/components/icon/User';
import useAuth from '~/hooks/useAuth';
import useSessionUser from '~/hooks/useSessionUser';

const Icon = memo(() => {
  const { userImage, userId } = useSessionUser();
  const { signOut } = useAuth();

  return (
    <Menu trigger="hover">
      <MenuTarget>
        <Avatar radius={'xl'} src={userImage} />
      </MenuTarget>
      <MenuDropdown style={{ marginLeft: 'calc(100% - 146px )', marginTop: '70px' }}>
        <Stack spacing={'xs'}>
          <Link href={`/profile/${userId}`}>
            <UnstyledButton>
              <MenuItem fw={'bold'} icon={<IconUser size={rem(14)} />}>
                マイページ
              </MenuItem>
            </UnstyledButton>
          </Link>
          <UnstyledButton onClick={signOut}>
            <MenuItem fw={'bold'} color="red" icon={<IconLogout size={rem(14)} />}>
              ログアウト
            </MenuItem>
          </UnstyledButton>
        </Stack>
      </MenuDropdown>
    </Menu>
  );
});

Icon.displayName = 'Icon';

export default Icon;
