import React, { useRef } from "react";
import JoditEditor from "jodit-react";
const Editor = ({ setNote, value }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      onChange={(e) => setNote(e.target.value)}
      value={value}
    />
  );
};

export default Editor;
