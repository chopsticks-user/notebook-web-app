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

  useEffect(() => {
    variables.current.push(...debugInfo);
  });

  return (
    <Split gutterSize={1} minSize={25} direction="vertical" className="debug-view-container">
      <DebugSection
        domElementID="dvsc-variables"
        sectionName="VARIABLES"
        functionality={
          <VariablesContent
            trackingVariables={variables.current}
            colorTheme={colorTheme}
          />
        }
        colorTheme={colorTheme}
      />
      <DebugSection
        domElementID="dvsc-timeline"
        sectionName="TIMELINE"
        functionality={<Feature />}
        colorTheme={colorTheme}
      />
      <DebugSection
        domElementID="dvsc-errors"
        sectionName="ERRORS"
        functionality={<Feature />}
        colorTheme={colorTheme}
      />
    </Split>
  );
}

type DebugSectionProps = {
  domElementID: string;
  sectionName: string;
  functionality: ReactElement<any>;
  colorTheme: any;
}

const DebugSection: React.FC<DebugSectionProps> = ({
  domElementID,
  sectionName,
  functionality,
  colorTheme
}) => {
  const dropDownIcon: string = ">";
  return (
    <div className="debug-view-section-container"
      id={domElementID}
      style={{ color: colorTheme.textColor }}
    >
      <header className="debug-view-section-header">
        <button
          className="dropdown-icon-arrow"
          style={{ color: colorTheme.textColor }}
        >
          {dropDownIcon}
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