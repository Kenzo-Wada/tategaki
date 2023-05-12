import { memo, useEffect } from 'react';

import RichTextEditor from '~/components/assets/RichTextEditor';
import RichTextEditorContent from '~/components/assets/RichTextEditor/Content';
import { StarterKit, useEditor } from '~/lib/tiptap';

type Props = {
  content: string | null;
};

const Markdown = memo((props: Props) => {
  const { content } = props;

  const editor = useEditor({
    extensions: [StarterKit],
    editable: false,
    content,
  });

  useEffect(() => {
    if (editor && content !== null) {
      editor.chain().setContent(content).run();
    }
  }, [content, editor]);

  return (
    <RichTextEditor editor={editor}>
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

Markdown.displayName = 'Markdown';

export default Markdown;
