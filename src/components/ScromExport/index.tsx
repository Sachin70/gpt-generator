import React from "react";
import { generateScormPackage } from "../../utils/scormUtils";
import styles from "./styles.module.scss";

interface ScormExportProps {
  content: string;
}

const ScormExport: React.FC<ScormExportProps> = ({ content }) => {
  const handleExport = async () => {
    const blob = await generateScormPackage(content);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "scorm_package.zip";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className={styles["scorm-export"]}>
      <button type="button" onClick={handleExport}>
        Export as SCORM
      </button>
    </div>
  );
};

export default ScormExport;
