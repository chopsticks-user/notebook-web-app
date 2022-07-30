import React, { useContext, useEffect, useState, useRef } from "react"
import "./WorkSpace.css"

type WorkSpaceProps = {
  setRawScripts: React.Dispatch<React.SetStateAction<string|null>>;
  commonTheme: any;
  colorTheme: any;
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ setRawScripts, colorTheme, commonTheme }) => {
  const [lineCount, setLineCount] = useState<number>(1);

  return (
    <div className="workspace-container">
      <div className="workspace-header-container">

      </div>
      <ScriptBlock
        lineCount={lineCount}
        setLineCount={setLineCount}
        setRawScripts={setRawScripts}
        commonTheme={commonTheme}
        colorTheme={colorTheme}
      />
    </div>
  );
}

type ScriptBlockProps = {
  lineCount: number;
  setLineCount: any;
  setRawScripts: any;
  commonTheme: any;
  colorTheme: any;
}

const ScriptBlock: React.FC<ScriptBlockProps> = ({
  lineCount, setLineCount, setRawScripts, commonTheme, colorTheme
}) => {
  type Sizes = {
    width: number,
    height: number
  }
  const [scriptBlockSizes, setScriptBlockSize] = useState<Sizes>();
  const [scripts, setScripts] = useState<string>("");

  const handleScriptChange = (e: any) => {
    setScripts(e.target.value);
    setRawScripts(e.target.value);

    if (!scriptBlockSizes) {
      setScriptBlockSize({
        width: e.target.scrollWidth,
        height: e.target.scrollHeight
      });
    } else {
      setScriptBlockSize({
        width: Math.max(e.target.scrollWidth, scriptBlockSizes.width),
        height: Math.max(e.target.scrollHeight, scriptBlockSizes.height)
      });
    }
  }

  const handleScroll = (e: any) => {
  }

  return (
    <div className="script-block-container">
      <div className="script-index-bar"
        style={{
          height: `${scriptBlockSizes?.height}px`,
          color: colorTheme.textColor
        }}>
      </div>
      <textarea
        className="script-contents"
        value={scripts}
        wrap="off"
        autoFocus={true}
        placeholder={"Enter your commands"}
        style={{
          backgroundColor: colorTheme.backgroundColor,
          color: colorTheme.textColor,
          fontSize: commonTheme.scriptFontSize,
          fontFamily: commonTheme.scriptFont
        }}
        onChange={handleScriptChange}
        onScroll={handleScroll}
      />
    </div>
  );
}

export default WorkSpace;