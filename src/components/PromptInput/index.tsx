import React, { useState } from "react";
import { fetchGPTContent } from "../../utils/gptApi";

import styles from './styles.module.scss';

interface PromptInputProps {
  onContentGenerated: (content: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ onContentGenerated }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const content = await fetchGPTContent(prompt);
    onContentGenerated(content);
    setLoading(false);
  };

  return (
    <div className={styles["prompt-input"]}>
      <textarea
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="button" onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
};

export default PromptInput;
