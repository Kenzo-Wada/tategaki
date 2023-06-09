import { memo, useEffect } from 'react';

import RichTextEditor from '~/components/assets/RichTextEditor';
import RichTextEditorBold from '~/components/assets/RichTextEditor/Bold';
import RichTextEditorContent from '~/components/assets/RichTextEditor/Content';
import RichTextEditorControlsGroup from '~/components/assets/RichTextEditor/ControlsGroup';
import RichTextEditorItalic from '~/components/assets/RichTextEditor/Italic';
import RichTextEditorStrikethrough from '~/components/assets/RichTextEditor/Strikethrough';
import RichTextEditorToolbar from '~/components/assets/RichTextEditor/Toolbar';
import { StarterKit, useEditor } from '~/lib/tiptap';

type Props = {
  content: string | null;
  setContent: (content: string) => void;
};

const MarkdownEditor = memo((props: Props) => {
  const { content, setContent } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  useEffect(() => {
    if (editor && content !== null) {
      editor.chain().setContent(content).run();
    }
  }, [content, editor]);

  return (
    <RichTextEditor editor={editor} onInput={() => setContent(editor?.getHTML() || '')}>
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
