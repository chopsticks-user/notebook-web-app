import React, { ReactElement, useContext, useEffect, useRef, useState } from "react"
import Split from "react-split"
import "./DebugView.css"

type DebugViewProps = {
  debugInfo: any[];
  commonTheme: any;
  colorTheme: any;
}

const DebugView: React.FC<DebugViewProps> = ({ debugInfo, commonTheme, colorTheme }) => {
  const variables = useRef<any[]>([]);
  const sectionMinHeight = 25;
  const nSections = 3;
  const [collapsed, setCollapsed] = useState<number>(nSections);

  useEffect(() => {
    variables.current.push(...debugInfo);
  });

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
        domElementID="dvsc-variables"
        sectionName="VARIABLES"
        setCollapsed={setCollapsed}
        functionality={
          <VariablesContent
            trackingVariables={variables.current}
            colorTheme={colorTheme}
          />
        }
        colorTheme={colorTheme}
      />
      <DebugSection
        index={1}
        minHeight={sectionMinHeight}
        domElementID="dvsc-timeline"
        sectionName="TIMELINE"
        setCollapsed={setCollapsed}
        functionality={<Feature />}
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

type VariablesContentProps = {
  trackingVariables: any[];
  colorTheme: any;
}

const VariablesContent: React.FC<VariablesContentProps> = ({ trackingVariables, colorTheme }) => {
  const variableList = trackingVariables?.map((variable, index) => {
    return (
      <li key={index} style={{ color: colorTheme.textColor }}>
        {variable}
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