import { rem } from '@mantine/core';
import { memo } from 'react';

import ActionIcon from '~/components/assets/ActionIcon';
import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Stack from '~/components/assets/Stack';
import Tag from '~/components/base/Badge/Tag';
import H3 from '~/components/base/Title/H3';
import { IconBooks } from '~/components/icon/Books';
import useAPI from '~/components/pages/Home/hooks/useAPI';

const Post = memo(() => {
  const { posts } = useAPI();
  console.log(posts);

  return (
    <Group spacing={'xl'}>
      {posts ? (
        posts.map((post) => (
          <Stack w={rem(200)} spacing={'xs'} key={post.id}>
            <Image radius={'md'} src="https://picsum.photos/600/400" alt="image" />
            <Group position="apart">
              <H3>{post.title}</H3>
              <ActionIcon>
                <IconBooks />
              </ActionIcon>
            </Group>
            <Group>
              <Tag>hoge</Tag>
              <Tag>fuga</Tag>
            </Group>
          </Stack>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </Group>
  );
});

Post.displayName = 'Post';

export default Post;
