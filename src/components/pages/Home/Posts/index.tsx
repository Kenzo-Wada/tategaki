import { rem } from '@mantine/core';
import Link from 'next/link';
import { memo, useCallback, useEffect, useState } from 'react';

import ActionIcon from '~/components/assets/ActionIcon';
import Avatar from '~/components/assets/Avatar';
import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Skeleton from '~/components/assets/Skeleton';
import Stack from '~/components/assets/Stack';
import Text from '~/components/assets/Text';
import UnstyledButton from '~/components/assets/UnstyledButton';
import Tag from '~/components/base/Badge/Tag';
import H2 from '~/components/base/Title/H2';
import H3 from '~/components/base/Title/H3';
import { IconBooks } from '~/components/icon/Books';
import type { PostType } from '~/components/pages/Home/hooks/useAPI';
import useAPI from '~/components/pages/Home/hooks/useAPI';
import useFavoriteAPI from '~/components/pages/Home/hooks/useFavoriteAPI';
import useSessionUser from '~/hooks/useSessionUser';

interface Props {
  post: PostType;
  handleLikeClick: (postId: string, isLiked: boolean) => void;
}

const Post = (props: Props) => {
  const { post, handleLikeClick } = props;
  const [isLiked, setIsLiked] = useState(post.currentUserLikes);

  const handleClick = () => {
    handleLikeClick(post.id, isLiked);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(post.currentUserLikes);
  }, [post.currentUserLikes]);

  const handlePostDate = useCallback((updatedAt: Date) => {
    const date = new Date(updatedAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month}/${day}`;
  }, []);

  return (
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
        <Group spacing={'xs'}>
          <ActionIcon color={isLiked ? 'pink' : 'gray'} onClick={handleClick}>
            <IconBooks />
          </ActionIcon>
          <Text color="dimmed" fz="sm">
            {post.likesCount}
          </Text>
        </Group>
      </Group>
      <Group>
        <Tag color="gray">小説, 短編</Tag>
      </Group>
    </Stack>
  );
};

const Posts = memo(() => {
  const { addLike, removeLike } = useFavoriteAPI();
  const { userId } = useSessionUser();
  const { posts, loading } = useAPI();

  const handleLikeClick = async (postId: string, isLiked: boolean) => {
    if (isLiked) {
      await removeLike(postId, userId);
    } else {
      await addLike(postId, userId);
    }
  };

  return (
    <Stack>
      <H2>新着記事</H2>
      {!loading && (
        <Skeleton visible={loading}>
          <Group spacing={'xl'}>
            {posts.length !== 0 && posts.map((post) => <Post key={post.id} post={post} handleLikeClick={handleLikeClick} />)}{' '}
          </Group>
        </Skeleton>
      )}
    </Stack>
  );
});

Posts.displayName = 'Posts';

export default Posts;
