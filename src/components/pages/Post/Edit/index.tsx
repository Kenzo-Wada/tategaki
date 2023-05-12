import { rem } from '@mantine/core';
import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';

import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Stack from '~/components/assets/Stack';
import TextInput from '~/components/assets/TextInput';
import DefaultBadge from '~/components/base/Badge/DefaultBadge';
import FilledButton from '~/components/base/Button/FilledButton';
import LightButton from '~/components/base/Button/LightButton';
import usePutAPI from '~/components/pages/Post/Edit/hooks/usePutAPI';
import MarkdownEditor from '~/components/pages/Post/Edit/MarkdownEditor';
import TagSelector from '~/components/pages/Post/Edit/TagSelect';
import useAPI from '~/components/pages/Post/hooks/useAPI';

const PostEditPage = memo(() => {
  const router = useRouter();
  const { id } = router.query;

  const { post } = useAPI(id);
  const { callAPI } = usePutAPI();

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [published, setPublished] = useState(post?.published);

  useEffect(() => {
    setTitle(post?.title || '');
    setContent(post?.content || '');
    setPublished(post?.published);
  }, [post]);

  const handleSave = async () => {
    await callAPI(id as string, {
      title,
      content,
    });
  };

  const handleRelease = async () => {
    await callAPI(id as string, {
      title,
      content,
      published: true,
    });
  };

  return (
    <Stack>
      <Group position="apart">
        <Group>
          {published ? <DefaultBadge variant={'filled'}>公開</DefaultBadge> : <DefaultBadge>下書き</DefaultBadge>}
          <TextInput
            variant="unstyled"
            size="xl"
            miw={rem(1000)}
            placeholder="タイトル"
            defaultValue={post?.title || ''}
            onInput={(v) => setTitle(v.currentTarget.value)}
          />
        </Group>
        <Group>
          <LightButton onClick={() => handleSave()}>保存</LightButton>
          <FilledButton onClick={() => handleRelease()}>公開</FilledButton>
        </Group>
      </Group>
      <Image radius={'md'} src="https://picsum.photos/1800/200" alt="image" />
      <TagSelector />
      <MarkdownEditor content={post?.content || null} setContent={setContent} />
    </Stack>
  );
});

PostEditPage.displayName = 'PostEditPage';

export default PostEditPage;
