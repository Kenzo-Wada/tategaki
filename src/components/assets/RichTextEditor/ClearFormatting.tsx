import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import { memo } from 'react';

const RichTextEditorClearFormatting = memo(() => {
  return <MantineRichTextEditor.ClearFormatting />;
});

RichTextEditorClearFormatting.displayName = 'RichTextEditor';

export default RichTextEditorClearFormatting;
