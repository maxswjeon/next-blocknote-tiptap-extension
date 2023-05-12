import { BlockNoteView, useBlockNote } from "@blocknote/react";

import "@blocknote/core/style.css";

import { CodeBlock } from "@tiptap/extension-code-block";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";

export default function Home() {
  const editor = useBlockNote({
    onEditorContentChange(editor) {
      console.log(editor._tiptapEditor.getJSON());
    },
    _tiptapOptions: {
      extensions: [CodeBlock, HorizontalRule],
    },
  });

  return (
    <main>
      <BlockNoteView editor={editor} />
    </main>
  );
}
