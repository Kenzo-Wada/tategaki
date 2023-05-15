import { Group, rem } from '@mantine/core';
import { useRouter } from 'next/router';
import { memo } from 'react';

import Avatar from '~/components/assets/Avatar';
import Paper from '~/components/assets/Paper';
import Stack from '~/components/assets/Stack';
import Text from '~/components/assets/Text';
import LightButton from '~/components/base/Button/LightButton';
import H3 from '~/components/base/Title/H3';
import { IconPencil } from '~/components/icon/Pencil';
import { IconPlus } from '~/components/icon/Plus';
import useAPI from '~/components/pages/Profile/UserDetail/hooks/useAPI';
import useSessionUser from '~/hooks/useSessionUser';

const UserDetail = memo(() => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAPI(id);
  const { userId } = useSessionUser();

  return (
    <Paper withBorder p={'lg'}>
      <Stack>
        <Group position="apart">
          <Group>
            <Avatar radius={'xl'} src={user?.image} />
            <H3>{user?.name}</H3>
          </Group>
          {userId === id ? (
            <LightButton leftIcon={<IconPencil />}>編集</LightButton>
          ) : (
            <LightButton leftIcon={<IconPlus size={rem(14)} />}>フォロー</LightButton>
          )}
        </Group>
        <Text size={'sm'}>{user?.profile}</Text>
        <Group spacing={'xl'}>
          <Group spacing={'xs'}>
            <Text fw={'bold'} size={'sm'}>
              {user?.followingCount}
            </Text>
            <Text size={'sm'}>フォロー</Text>
          </Group>
          <Group spacing={'xs'}>
            <Text fw={'bold'} size={'sm'}>
              {user?.followersCount}
            </Text>
            <Text size={'sm'}>フォロワー</Text>
          </Group>
        </Group>
      </Stack>
    </Paper>
  );
});

UserDetail.displayName = 'UserDetail';

export default UserDetail;
