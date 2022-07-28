import React, { useContext, useEffect, useState } from "react"
import "./WorkSpace.css"

type WorkSpaceProps = {
  setDebugInfo: React.Dispatch<React.SetStateAction<any[]>>;
  theme: any;
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ setDebugInfo, theme }) => {
  const [lineCount, setLineCount] = useState<number>(1);



  return (
    <div className="workspace-container" onClick={(e) => { setDebugInfo([e.clientX]); }}>
      <ScriptBlockContainer nLines={lineCount} theme={theme} />
    </div>
  );
}

const NewScriptBlock = (index: number, textColor: string, scripts: string, setScripts: any) => {


  console.log("a");

  return (
    <div className="script-block" id={`sb-${index}`} style={{ color: textColor }} key={index}>
      <div className="script-block--index">{index}</div>
      <div className="script-container">
        <input type="text" value={scripts} onChange={(e) => { setScripts(e.target.value); }}></input>
      </div>
    </div>
  );
}

type ScriptBlockContainerProps = {
  nLines: number;
  theme: any;
}

const ScriptBlockContainer: React.FC<ScriptBlockContainerProps> = ({ nLines, theme }) => {
  const scriptNewLine = ">> "
  const [scripts, setScripts] = useState<string>(scriptNewLine);
  const index = 1;
  const textColor = theme.textColor;

  const handleScriptChange = (e: any) => {
    if (scripts !== ">> " || e.target.value !== ">>") {
      setScripts(e.target.value);
    }
  }

  return (
    <div className="script-block-container">
      <div className="script-block" id={`sb-${index}`} style={{ color: textColor }} key={index}>
        <div className="script-block--index">{index}</div>
        <div className="script-container">
          <input type="text" value={scripts} onChange={handleScriptChange}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
            border: "none"
            
          }}></input>
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;