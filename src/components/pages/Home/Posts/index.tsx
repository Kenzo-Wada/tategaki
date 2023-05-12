import { rem } from '@mantine/core';
import { memo, useCallback } from 'react';

import ActionIcon from '~/components/assets/ActionIcon';
import Avatar from '~/components/assets/Avatar';
import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Stack from '~/components/assets/Stack';
import Text from '~/components/assets/Text';
import Tag from '~/components/base/Badge/Tag';
import H3 from '~/components/base/Title/H3';
import { IconBooks } from '~/components/icon/Books';
import useAPI from '~/components/pages/Home/hooks/useAPI';

const Posts = memo(() => {
  const { posts } = useAPI();
  console.log(posts);

  const handlePostDate = useCallback((updatedAt: Date) => {
    const date = new Date(updatedAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  }, []);

  return (
    <Group spacing={'xl'}>
      {posts ? (
        posts.map((post) => (
          <Stack w={rem(200)} spacing={'xs'} key={post.id}>
            <Text color="dimmed" size={'xs'} ta="right">
              {handlePostDate(post.updated_at)}
            </Text>
            <Image radius={'md'} src="https://picsum.photos/600/400" alt="image" />
            <H3>{post.title}</H3>
            <Group position="apart">
              <Group spacing={'xs'}>
                <Avatar radius={'xl'} size={'sm'} src={post.author.image} alt="avatar" />
                <Text color="dimmed" fz="sm">
                  {post.author.name}
                </Text>
              </Group>
              <ActionIcon>
                <IconBooks />
              </ActionIcon>
            </Group>
            <Group>
              <Tag color="gray">小説, 短編</Tag>
            </Group>
          </Stack>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </Group>
  );
});

Posts.displayName = 'Posts';

export default Posts;
