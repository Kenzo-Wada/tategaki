import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import { memo } from 'react';

const RichTextEditorStrikethrough = memo(() => {
  return <MantineRichTextEditor.Strikethrough />;
});

RichTextEditorStrikethrough.displayName = 'RichTextEditor';

export default RichTextEditorStrikethrough;
