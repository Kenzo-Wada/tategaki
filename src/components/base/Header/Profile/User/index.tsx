import Link from 'next/link';
import { memo } from 'react';

import Group from '~/components/assets/Group';
import FilledButton from '~/components/base/Button/FilledButton';
import Icon from '~/components/base/Header/Profile/User/Icon';
import { IconPencil } from '~/components/icon/Pencil';

const User = memo(() => {
  return (
    <Group>
      <Link href={'/new'}>
        <FilledButton leftIcon={<IconPencil />}>書く</FilledButton>
      </Link>
      <Icon />
    </Group>
  );
});

User.displayName = 'User';

export default User;
