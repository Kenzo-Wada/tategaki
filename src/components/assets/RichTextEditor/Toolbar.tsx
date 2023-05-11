import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import type { RichTextEditorToolbarProps as MantineRichTextEditorToolbarProps } from '@mantine/tiptap';
import { memo } from 'react';

type RichTextEditorToolbarProps = MantineRichTextEditorToolbarProps;

const RichTextEditorToolbar = memo((props: RichTextEditorToolbarProps) => {
  return <MantineRichTextEditor.Toolbar {...props} />;
});

RichTextEditorToolbar.displayName = 'RichTextEditor';

export default RichTextEditorToolbar;
