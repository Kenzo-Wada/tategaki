import { rem } from '@mantine/core';
import { memo } from 'react';

import ActionIcon from '~/components/assets/ActionIcon';
import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Stack from '~/components/assets/Stack';
import Text from '~/components/assets/Text';
import H3 from '~/components/base/Title/H3';
import { IconBooks } from '~/components/icon/Books';

const Post = memo(() => {
  return (
    <Stack w={rem(200)} spacing={'xs'}>
      <Image radius={'md'} src="https://picsum.photos/600/400" alt="image" />
      <Group position="apart">
        <H3>タイトル</H3>
        <ActionIcon>
          <IconBooks />
        </ActionIcon>
      </Group>

      <Text c={'dimmed'} fz={'sm'}>
        記事の詳細を紹介
      </Text>
    </Stack>
  );
});

Post.displayName = 'Post';

export default Post;
