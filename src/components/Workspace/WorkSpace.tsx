import React, { useContext, useEffect, useState, useRef } from "react"
import "./WorkSpace.css"

type WorkSpaceProps = {
  setRawScripts: React.Dispatch<React.SetStateAction<string>>;
  sectionThemes: any;
  generalTheme: any;
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ setRawScripts, generalTheme, sectionThemes }) => {
  const [lineCount, setLineCount] = useState<number>(1);

  return (
    <div className="workspace-container">
      <div className="workspace-header-container">

      </div>
      <ScriptBlock
        lineCount={lineCount}
        setLineCount={setLineCount}
        setRawScripts={setRawScripts}
        sectionThemes={sectionThemes}
        generalTheme={generalTheme}
      />
    </div>
  );
}

type ScriptBlockProps = {
  lineCount: number;
  setLineCount: any;
  setRawScripts: any;
  sectionThemes: any;
  generalTheme: any;
}

const ScriptBlock: React.FC<ScriptBlockProps> = ({
  lineCount, setLineCount, setRawScripts, sectionThemes, generalTheme
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

  const indexBar: any = (e: any) => {
    const indices: any[] = []
    for (let i = 0; i < 50; i++) {
      indices.push(<li style={{ color: generalTheme.textColor, listStyle: "none", fontSize: "14px" }}>{i}</li>);
    }
    return indices;
  }

  return (
    <div className="script-block-container">
      <div className="script-index-bar"
        style={{
          height: `${scriptBlockSizes?.height}px`,
          color: generalTheme.textColor,
          paddingLeft: "5px"
        }}>
        {/* {indexBar()} */}
      </div>
      <textarea
        className="script-contents"
        value={scripts}
        wrap="off"
        autoFocus={true}
        placeholder={"Enter your commands"}
        style={{
          backgroundColor: generalTheme.backgroundColor,
          color: generalTheme.textColor,
          fontSize: sectionThemes.scriptFontSize,
          fontFamily: sectionThemes.scriptFont
        }}
        onChange={handleScriptChange}
      />
    </div>
  );
}

export default WorkSpace;