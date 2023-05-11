import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import { memo } from 'react';

const RichTextEditorBold = memo(() => {
  return <MantineRichTextEditor.Bold />;
});

RichTextEditorBold.displayName = 'RichTextEditor';

export default RichTextEditorBold;
