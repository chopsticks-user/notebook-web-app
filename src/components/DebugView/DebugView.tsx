import React, { ReactElement, useEffect, useRef, useState } from "react"
import Split from "react-split"
import "./DebugView.css"
import { processRawScripts } from "../../helpers/ScriptProcessing"

type DebugViewProps = {
  rawScripts: string;
  sectionThemes: any;
  generalTheme: any;
}

const DebugView: React.FC<DebugViewProps> = ({
  rawScripts, sectionThemes, generalTheme
}) => {
  const sectionMinHeight: number = 25;
  const nSections: number = 3;
  const [collapsed, setCollapsed] = useState<number>(nSections);
  let processedScripts = useRef<string[]>([]);

  processedScripts.current = processRawScripts(rawScripts);

  return (
    <Split
      gutterSize={1}
      minSize={sectionMinHeight}
      collapsed={collapsed}
      direction="vertical"
      className="debug-view-container">
      <DebugSection
        index={0}
        minHeight={sectionMinHeight}
        domElementID="dvsc-suggestions"
        sectionName="SUGGESTIONS"
        setCollapsed={setCollapsed}
        functionality={<Feature />}
        generalTheme={generalTheme}
      />

      <DebugSection
        index={1}
        minHeight={sectionMinHeight}
        domElementID="dvsc-info"
        sectionName="INFO"
        setCollapsed={setCollapsed}
        functionality={
          <Info
            processedScripts={processedScripts.current}
            generalTheme={generalTheme}
            sectionThemes={sectionThemes}
          />
        }
        generalTheme={generalTheme}
      />
      <DebugSection
        index={2}
        minHeight={sectionMinHeight}
        domElementID="dvsc-errors"
        sectionName="ERRORS"
        setCollapsed={setCollapsed}
        functionality={<Feature />}
        generalTheme={generalTheme}
      />
    </Split>
  );
}

type DebugSectionProps = {
  index: number;
  minHeight: number;
  domElementID: string;
  sectionName: string;
  setCollapsed: React.Dispatch<React.SetStateAction<number>>;
  functionality: ReactElement<any>;
  generalTheme: any;
}

const DebugSection: React.FC<DebugSectionProps> = ({
  index,
  minHeight,
  domElementID,
  sectionName,
  setCollapsed,
  functionality,
  generalTheme
}) => {
  const minimizePanelButton: string = ">"

  return (
    <div className="debug-view-section-container"
      id={domElementID}
      style={{
        color: generalTheme.textColor,
      }}>
      <header className="debug-view-section-header">
        <button
          className="minimize-panel-button"
          id="dvsc-mpb"
          style={{ color: generalTheme.textColor }}
          onClick={() => setCollapsed(index)}
        >
          {minimizePanelButton}
        </button>
        <b style={{ fontSize: "12px" }}>{sectionName}</b>
      </header>
      <div className="debug-view-section-content">
        {functionality}
      </div>
    </div>
  );
}

const Feature = () => {
  return <span></span>;
}

type InfoProps = {
  processedScripts: string[];
  generalTheme: any;
  sectionThemes: any;
}

const Info: React.FC<InfoProps> = ({
  processedScripts, generalTheme, sectionThemes
}) => {

  const infoContents = processedScripts
    .map((value, index) => {
      return (
        <li
          key={index + 1}
          style={{
            color: generalTheme.textColor,
            listStyle: "none",
            fontSize: sectionThemes.contentFontSize,
          }}>
          {`+ [${index + 1}]: ${value}`}
        </li>
      );
    });

  return (
    <div>
      {infoContents}
    </div>
  );
}

export default DebugView;