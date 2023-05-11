import { RichTextEditor as MantineRichTextEditor } from '@mantine/tiptap';
import type { RichTextEditorControlsGroupProps as MantineRichTextEditorControlsGroupProps } from '@mantine/tiptap';
import { memo } from 'react';

type RichTextEditorControlsGroupProps = MantineRichTextEditorControlsGroupProps;

const RichTextEditorControlsGroup = memo((props: RichTextEditorControlsGroupProps) => {
  return <MantineRichTextEditor.ControlsGroup {...props} />;
});

RichTextEditorControlsGroup.displayName = 'RichTextEditor';

export default RichTextEditorControlsGroup;
