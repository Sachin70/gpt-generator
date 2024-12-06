import React, { useState } from 'react';
import Editor from '../../components/Editor';
import PromptInput from '../../components/PromptInput';
import ScormExport from '../../components/ScromExport';

import styles from './styles.module.scss';

const HomePage: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <div className={styles['home-page']}>
      <h1>GPT Integrated Rich Text Editor</h1>
      <Editor value={content} onChange={(val) => setContent(val)} />
      <ScormExport content={content} />
      <PromptInput onContentGenerated={(generated) => setContent(generated)} />
    </div>
  );
};

export default HomePage;
