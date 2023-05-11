import Link from 'next/link';
import { memo } from 'react';

import Avatar from '~/components/assets/Avatar';
import Group from '~/components/assets/Group';
import FilledButton from '~/components/base/Button/FilledButton';
import { IconPencil } from '~/components/icon/Pencil';
import useSessionUser from '~/hooks/useSessionUser';

const User = memo(() => {
  const { userImage } = useSessionUser();

  return (
    <Group>
      <Link href={'/new'}>
        <FilledButton leftIcon={<IconPencil />}>書く</FilledButton>
      </Link>
      <Avatar radius={'xl'} src={userImage} />
    </Group>
  );
});

User.displayName = 'User';

export default User;
