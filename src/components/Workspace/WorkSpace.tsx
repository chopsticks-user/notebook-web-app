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
  const [divH, setDivH] = useState<number>();
  const [scripts, setScripts] = useState<string>("");

  const handleScriptChange = (e: any) => {
    console.log(e.target.scrollHeight);
    setScripts(e.target.value);
  }

  return (
    <div className="script-block-container">
      <div className="script-index-bar" style={{color:colorTheme.textColor}}></div>
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
        }}
        onChange={handleScriptChange}
      />
    </div>
  );
}

export default WorkSpace;