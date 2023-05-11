import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import type { RichTextEditorProps as MantineRichTextEditorProps } from '@mantine/tiptap';
import { memo } from 'react';

type RichTextEditorProps = MantineRichTextEditorProps;

const RichTextEditor = memo((props: RichTextEditorProps) => {
  return <MantineRichTextEditor {...props} />;
});

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;
