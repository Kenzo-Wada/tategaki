import { rem } from '@mantine/core';
import { useRouter } from 'next/router';
import { memo, useState } from 'react';

import Group from '~/components/assets/Group';
import Image from '~/components/assets/Image';
import RichTextEditor from '~/components/assets/RichTextEditor';
import RichTextEditorBold from '~/components/assets/RichTextEditor/Bold';
import RichTextEditorContent from '~/components/assets/RichTextEditor/Content';
import RichTextEditorControlsGroup from '~/components/assets/RichTextEditor/ControlsGroup';
import RichTextEditorItalic from '~/components/assets/RichTextEditor/Italic';
import RichTextEditorStrikethrough from '~/components/assets/RichTextEditor/Strikethrough';
import RichTextEditorToolbar from '~/components/assets/RichTextEditor/Toolbar';
import Stack from '~/components/assets/Stack';
import TextInput from '~/components/assets/TextInput';
import DefaultBadge from '~/components/base/Badge/DefaultBadge';
import FilledButton from '~/components/base/Button/FilledButton';
import LightButton from '~/components/base/Button/LightButton';
import { StarterKit, useEditor } from '~/lib/tiptap';

const PostEditPage = memo(() => {
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState<string | null>('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
  });

  return (
    <Stack>
      <Group position="apart">
        <Group>
          <DefaultBadge>下書き</DefaultBadge>
          <TextInput variant="unstyled" size="xl" miw={rem(1000)} placeholder="タイトル" />
        </Group>
        <Group>
          <LightButton>保存</LightButton>
          <FilledButton>公開</FilledButton>
        </Group>
      </Group>
      <Image radius={'md'} src="https://picsum.photos/1800/200" alt="image" />
      <RichTextEditor editor={editor} onInput={() => setValue(editor?.getHTML() || '')}>
        <RichTextEditorToolbar>
          <RichTextEditorControlsGroup>
            <RichTextEditorBold />
            <RichTextEditorItalic />
            {/* <RichTextEditorUnderline /> */}
            <RichTextEditorStrikethrough />
          </RichTextEditorControlsGroup>
        </RichTextEditorToolbar>
        <RichTextEditorContent
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            width: '100%',
            height: '50%',
            whiteSpace: 'pre',
            overflowWrap: 'normal',
            overflowX: 'auto',
          }}
        />
      </RichTextEditor>
    </Stack>
  );
});

PostEditPage.displayName = 'PostEditPage';

export default PostEditPage;
