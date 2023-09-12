import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai';

const RichTextEditor = ({
    handleDescription,
    value,
    name
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    const contentState = editorState.getCurrentContent();
    const plainText = contentState.getPlainText();
    handleDescription(plainText);
  };
  

  const handleBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const handleUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const handleToggleOrderedListItem = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
  };

  const handleToggleBulletListItem = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };

  // Get the plain text content from the editorState
 

  return (
    <div className='form-Description'>
      <div className='editor-toolbar'>
        <span className='text-editor-tool' onClick={handleBoldClick}>
          B
        </span>
        <span className='text-editor-tool' onClick={handleItalicClick}>
          I
        </span>
        <span className='text-editor-tool' onClick={handleUnderlineClick}>
          U
        </span>
        <span className='text-editor-tool' onClick={handleToggleOrderedListItem}>
          <AiOutlineOrderedList />
        </span>
        <span className='text-editor-tool' onClick={handleToggleBulletListItem}>
          <AiOutlineUnorderedList />
        </span>
      </div>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        className='custom-editor'
        name={name}
        
        editorClassName='custom-editor-content'
      />
    </div>
  );
};

export default RichTextEditor;
