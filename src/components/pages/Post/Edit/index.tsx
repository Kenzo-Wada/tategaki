import { rem } from '@mantine/core';
import type { FileWithPath } from '@mantine/dropzone';
import { useRouter } from 'next/router';
import { memo, useEffect, useState } from 'react';

import Dropzone from '~/components/assets/Dropzone';
import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import Skeleton from '~/components/assets/Skeleton';
import Stack from '~/components/assets/Stack';
import Text from '~/components/assets/Text';
import TextInput from '~/components/assets/TextInput';
import DefaultBadge from '~/components/base/Badge/DefaultBadge';
import FilledButton from '~/components/base/Button/FilledButton';
import LightButton from '~/components/base/Button/LightButton';
import { IconPhotoPlus } from '~/components/icon/PhotoPlus';
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
  const [tags, setTags] = useState(post?.tags);
  const [image, setImage] = useState<FileWithPath[] | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (image && image[0]) {
      const url = URL.createObjectURL(image[0]);
      setImageSrc(url);

      // When component unmount or image change, release object url
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setImageSrc(null);
    }
  }, [image]);

  useEffect(() => {
    setTitle(post?.title || '');
    setContent(post?.content || '');
    setPublished(post?.published);
    setTags(post?.tags || []);
  }, [post]);

  const handleSave = async () => {
    await callAPI(id as string, {
      title,
      content,
      tags,
    });
  };

  const handleRelease = async () => {
    await callAPI(id as string, {
      title,
      content,
      published: true,
      tags,
    });
  };

  console.log(imageSrc);

  return (
    <Stack>
      <Skeleton visible={!post}>
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
      </Skeleton>
      <Skeleton visible={!post}>
        {/* <Image
          radius={'md'}
          src="https://fastly.picsum.photos/id/637/1800/200.jpg?hmac=H5goMV9PhgTu7z7DDMDPJoCKN9vgPPw1KnF-1pvbIr0"
          alt="image"
        /> */}
        <Dropzone onDrop={(v) => setImage(v)} h={rem(200)}>
          <Group position="center" spacing={'xl'} h={rem(160)}>
            <IconPhotoPlus size={rem(48)} color="gray" />
            <Text color="dimmed">クリックまたはドラッグ&ドロップで画像をアップロード</Text>
            {imageSrc && <Image src={imageSrc} width={100} height={100} alt="preview" />}
          </Group>
        </Dropzone>
      </Skeleton>
      <Skeleton visible={!post}>
        <Stack>
          {post?.tags && <TagSelector setTags={setTags} tags={tags} />}
          <MarkdownEditor content={post?.content || null} setContent={setContent} />
        </Stack>
      </Skeleton>
    </Stack>
  );
});

PostEditPage.displayName = 'PostEditPage';

export default PostEditPage;
