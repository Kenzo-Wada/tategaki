import { memo } from 'react';

import RichTextEditor from '~/components/assets/RichTextEditor';
import RichTextEditorBold from '~/components/assets/RichTextEditor/Bold';
import RichTextEditorContent from '~/components/assets/RichTextEditor/Content';
import RichTextEditorControlsGroup from '~/components/assets/RichTextEditor/ControlsGroup';
import RichTextEditorItalic from '~/components/assets/RichTextEditor/Italic';
import RichTextEditorStrikethrough from '~/components/assets/RichTextEditor/Strikethrough';
import RichTextEditorToolbar from '~/components/assets/RichTextEditor/Toolbar';
import { StarterKit, useEditor } from '~/lib/tiptap';

const MarkdownEditor = memo(() => {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return (
    <RichTextEditor editor={editor} onInput={() => console.log(editor?.getHTML() || '')}>
      <RichTextEditorToolbar>
        <RichTextEditorControlsGroup>
          <RichTextEditorBold />
          <RichTextEditorItalic />
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
  );
});

MarkdownEditor.displayName = 'MarkdownEditor';

export default MarkdownEditor;
