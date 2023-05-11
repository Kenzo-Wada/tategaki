import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import type { RichTextEditorContentProps as MantineRichTextEditorContentProps } from '@mantine/tiptap';
import { memo } from 'react';

type RichTextEditorContentProps = MantineRichTextEditorContentProps;

const RichTextEditorContent = memo((props: RichTextEditorContentProps) => {
  return <MantineRichTextEditor.Content {...props} />;
});

RichTextEditorContent.displayName = 'RichTextEditor';

export default RichTextEditorContent;
