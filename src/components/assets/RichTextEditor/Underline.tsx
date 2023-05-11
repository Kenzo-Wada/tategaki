import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import { memo } from 'react';

const RichTextEditorUnderline = memo(() => {
  return <MantineRichTextEditor.Underline />;
});

RichTextEditorUnderline.displayName = 'RichTextEditor';

export default RichTextEditorUnderline;
