import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import { memo } from 'react';

const RichTextEditorItalic = memo(() => {
  return <MantineRichTextEditor.Italic />;
});

RichTextEditorItalic.displayName = 'RichTextEditor';

export default RichTextEditorItalic;
