import { rem } from '@mantine/core';
import { useRouter } from 'next/router';
import { memo } from 'react';

import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Stack from '~/components/assets/Stack';
import TextInput from '~/components/assets/TextInput';
import DefaultBadge from '~/components/base/Badge/DefaultBadge';
import FilledButton from '~/components/base/Button/FilledButton';
import LightButton from '~/components/base/Button/LightButton';
import MarkdownEditor from '~/components/pages/Post/Edit/MarkdownEditor';
import TagSelector from '~/components/pages/Post/Edit/TagSelect';
import useAPI from '~/components/pages/Post/hooks/useAPI';

const PostEditPage = memo(() => {
  const router = useRouter();
  const { id } = router.query;

  const { post } = useAPI(id);

  return (
    <Stack>
      <Group position="apart">
        <Group>
          <DefaultBadge>下書き</DefaultBadge>
          <TextInput variant="unstyled" size="xl" miw={rem(1000)} placeholder="タイトル" defaultValue={post?.title || ''} />
        </Group>
        <Group>
          <LightButton>保存</LightButton>
          <FilledButton>公開</FilledButton>
        </Group>
      </Group>
      <Image radius={'md'} src="https://picsum.photos/1800/200" alt="image" />
      <TagSelector />
      <MarkdownEditor content={post?.content || null} />
    </Stack>
  );
});

PostEditPage.displayName = 'PostEditPage';

export default PostEditPage;
