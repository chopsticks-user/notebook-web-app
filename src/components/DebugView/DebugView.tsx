import React, { ReactElement, useEffect, useRef, useState } from "react"
import Split from "react-split"
import "./DebugView.css"

const processRawScripts = (rawScripts: string) => {
  const preprocessedScripts = JSON.stringify(rawScripts);
  const len = preprocessedScripts.length;
  return preprocessedScripts
    .slice(1, len - 1)
    .replaceAll("\\n", "")
    .split(";");
}

type DebugViewProps = {
  rawScripts: string;
  commonTheme: any;
  colorTheme: any;
}

const DebugView: React.FC<DebugViewProps> = ({
  rawScripts, commonTheme, colorTheme
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
        colorTheme={colorTheme}
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
            colorTheme={colorTheme}
          />
        }
        colorTheme={colorTheme}
      />
      <DebugSection
        index={2}
        minHeight={sectionMinHeight}
        domElementID="dvsc-errors"
        sectionName="ERRORS"
        setCollapsed={setCollapsed}
        functionality={<Feature />}
        colorTheme={colorTheme}
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
  colorTheme: any;
}

const DebugSection: React.FC<DebugSectionProps> = ({
  index,
  minHeight,
  domElementID,
  sectionName,
  setCollapsed,
  functionality,
  colorTheme
}) => {
  const minimizePanelButton: string = ">";

  return (
    <div className="debug-view-section-container"
      id={domElementID}
      style={{
        color: colorTheme.textColor,
      }}>
      <header className="debug-view-section-header">

        <button
          className="minimize-panel-button"
          style={{ color: colorTheme.textColor }}
          onClick={() => setCollapsed(index)}
        >
          {minimizePanelButton}
        </button>

        <b>{sectionName}</b>
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
  colorTheme: any;
}

const Info: React.FC<InfoProps> = ({
  processedScripts, colorTheme
}) => {

  useEffect(() => {
    console.log(processedScripts);
  });

  const variableList = processedScripts
    .map((value, index) => {
      return (
        <li
          key={index + 1}
          style={{
            color: colorTheme.textColor,
            listStyle: "none"
          }}>
          {`> [${index + 1}]: ${value}`}
        </li>
      );
    });

  return (
    <div>
      {variableList}
    </div>
  );
}

export default DebugView;