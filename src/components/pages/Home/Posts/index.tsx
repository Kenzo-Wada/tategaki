import { rem } from '@mantine/core';
import Link from 'next/link';
import { memo, useCallback } from 'react';

import ActionIcon from '~/components/assets/ActionIcon';
import Avatar from '~/components/assets/Avatar';
import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Stack from '~/components/assets/Stack';
import Text from '~/components/assets/Text';
import UnstyledButton from '~/components/assets/UnstyledButton';
import Tag from '~/components/base/Badge/Tag';
import H2 from '~/components/base/Title/H2';
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
      <Stack>
        <H2>新着記事</H2>
        {posts ? (
          posts.map((post) => (
            <Stack w={rem(200)} spacing={'xs'} key={post.id}>
              <Text color="dimmed" size={'xs'} ta="right">
                {handlePostDate(post.updated_at)}
              </Text>
              <Link href={`/post/${post.id}`}>
                <UnstyledButton>
                  <Stack>
                    <Image
                      radius={'md'}
                      src="https://fastly.picsum.photos/id/101/600/400.jpg?hmac=llLoR1bOz8D526iiSDyuQqaBly_c4YPlxkbsGbYQxkI"
                      alt="image"
                    />
                    <H3>{post.title}</H3>
                  </Stack>
                </UnstyledButton>
              </Link>
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
      </Stack>
    </Group>
  );
});

Posts.displayName = 'Posts';

export default Posts;
