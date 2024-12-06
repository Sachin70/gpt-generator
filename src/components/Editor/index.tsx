import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import styles from "./styles.module.scss";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => (
  <div className={styles["editor-container"]}>
    <ReactQuill theme="snow" value={value} onChange={onChange} />
  </div>
);

export default Editor;
