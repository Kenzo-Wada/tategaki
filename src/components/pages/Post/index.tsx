import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';

import ActionIcon from '~/components/assets/ActionIcon';
import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Stack from '~/components/assets/Stack';
import Text from '~/components/assets/Text';
import FilledButton from '~/components/base/Button/FilledButton';
import H2 from '~/components/base/Title/H2';
import { IconBooks } from '~/components/icon/Books';
import { IconPencil } from '~/components/icon/Pencil';
import TagSelector from '~/components/pages/Post/Edit/TagSelect';
import useAPI from '~/components/pages/Post/hooks/useAPI';
import Markdown from '~/components/pages/Post/Markdown';
import useSessionUser from '~/hooks/useSessionUser';

const PostPage = memo(() => {
  const router = useRouter();
  const { id } = router.query;

  const { post } = useAPI(id);
  const { userId } = useSessionUser();

  const [title, setTitle] = useState(post?.title || '');

  console.log('p:', post);

  useEffect(() => {
    setTitle(post?.title || '');
  }, [post]);

  return (
    <Stack>
      <Group position="apart">
        <Group spacing={'xl'}>
          <Group spacing={'xs'}>
            <ActionIcon>
              <IconBooks />
            </ActionIcon>
            <Text color="dimmed">12</Text>
          </Group>
          <H2>{title}</H2>
        </Group>
        {userId === post?.authorId && (
          <Link href={`/post/${id}/edit`}>
            <FilledButton leftIcon={<IconPencil />}> 編集</FilledButton>
          </Link>
        )}
      </Group>
      <Image
        radius={'md'}
        src="https://fastly.picsum.photos/id/637/1800/200.jpg?hmac=H5goMV9PhgTu7z7DDMDPJoCKN9vgPPw1KnF-1pvbIr0"
        alt="image"
      />
      <TagSelector />
      <Markdown content={post?.content || null} />
    </Stack>
  );
});

PostPage.displayName = 'PostPage';

export default PostPage;
