import { AnyARecord } from "dns";
import React, { useContext, useEffect, useState, useRef } from "react"
import "./WorkSpace.css"

type WorkSpaceProps = {
  setDebugInfo: React.Dispatch<React.SetStateAction<any[]>>;
  commonTheme: any;
  colorTheme: any;
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ setDebugInfo, colorTheme, commonTheme }) => {
  const [lineCount, setLineCount] = useState<number>(1);

  return (
    <div className="workspace-container" onClick={(e) => { setDebugInfo([e.clientX]); }}>
      <div className="workspace-header-container">

      </div>
      <ScriptBlock
        lineCount={lineCount}
        setLineCount={setLineCount}
        commonTheme={commonTheme}
        colorTheme={colorTheme}
      />
    </div>
  );
}

type ScriptBlockProps = {
  lineCount: number;
  setLineCount: any;
  commonTheme: any;
  colorTheme: any;
}

const ScriptBlock: React.FC<ScriptBlockProps> = ({
  lineCount, setLineCount, commonTheme, colorTheme
}) => {
  type Sizes = {
    width: number,
    height: number
  }
  const [scriptBlockSizes, setScriptBlockSize] = useState<Sizes>();
  const [scripts, setScripts] = useState<string>("");

  const handleScriptChange = (e: any) => {
    setScripts(e.target.value);

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
    console.log(scriptBlockSizes);
    console.log(e.target.scrollWidth, e.target.scrollHeight);
  }

  return (
    <div className="script-block-container">
      <div className="script-index-bar"
        style={{ height: `${scriptBlockSizes?.height}px`, color: colorTheme.textColor }}>
        0
      </div>
      <textarea
        className="script-contents"
        value={scripts}
        wrap="off"
        autoFocus={true}
        placeholder={"Enter your commands"}
        style={{
          height: `${scriptBlockSizes?.height}px`,
          width: `${scriptBlockSizes?.width}px`,
          backgroundColor: colorTheme.backgroundColor,
          color: colorTheme.textColor,
          fontSize: commonTheme.scriptFontSize,
        }}
        onChange={handleScriptChange}
      />
    </div>
  );
}

export default WorkSpace;