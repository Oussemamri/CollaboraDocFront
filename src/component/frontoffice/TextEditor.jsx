import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const staticOwnerId = 'user1'; // Static owner ID for testing
  const [editorHtml, setEditorHtml] = useState('');
  const initialDocumentData = [
    { type: 'paragraph', content: 'This is a shared block' },
  ];

  useEffect(() => {
    // Convert initialDocumentData to HTML and set it as the initial editor content
    const html = initialDocumentData.map(block => `<div>${block.content}</div>`).join('');
    setEditorHtml(html);
  }, []);

  const addBlock = () => {
    const newBlock = { type: 'user-block', userId: staticOwnerId, content: `This is user ${staticOwnerId}'s block` };
    const updatedHtml = editorHtml + `<div>${newBlock.content}</div>`;
    setEditorHtml(updatedHtml);
  };

  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={setEditorHtml} // This will handle changes directly to editorHtml
      />
      <button onClick={addBlock}>Add Block</button>
    </div>
  );
};

export default TextEditor;
