import React, { ReactElement, useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../App"
import Split from "react-split"
import "./DebugView.css"

type DebugViewProps = {
  debugInfo: any;
}

const DebugView: React.FC<DebugViewProps> = ({ debugInfo }) => {
  const theme = useContext(ThemeContext);
  const variables = useRef<any[]>([]);

  useEffect(() => {
    if (debugInfo !== undefined) {
      variables.current.push(debugInfo);
    }
  });

  return (
    <Split gutterSize={1} minSize={25} direction="vertical" className="debug-view-container">
      <DebugSection
        domElementID="variables"
        sectionName="VARIABLES"
        functionality={
          <VariablesContent
            trackingVariables={variables.current}
            defaultTextColor={theme.textColor}
          />
        }
        defaultTextColor={theme.textColor}
      />
      <DebugSection
        domElementID="watch-list"
        sectionName="WATCH LIST"
        functionality={<Feature />}
        defaultTextColor={theme.textColor}
      />
      <DebugSection
        domElementID="timeline"
        sectionName="TIMELINE"
        functionality={<Feature />}
        defaultTextColor={theme.textColor}
      />
    </Split>
  );
}

type DebugSectionProps = {
  domElementID: string;
  sectionName: string;
  functionality: ReactElement<any>;
  defaultTextColor: string;
}

const DebugSection: React.FC<DebugSectionProps> = ({
  domElementID,
  sectionName,
  functionality,
  defaultTextColor
}) => {
  const dropDownIcon: string = ">";
  return (
    <div className="debug-view-section-container"
      id={domElementID}
      style={{ color: defaultTextColor }}
    >
      <header className="debug-view-section-header">
        <button
          className="dropdown-icon-arrow"
          style={{ color: defaultTextColor }}
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
  defaultTextColor: string;
}

const VariablesContent: React.FC<VariablesContentProps> = ({ trackingVariables, defaultTextColor }) => {
  const variableList = trackingVariables?.map((variable, index) => {
    return (
      <li key={index} style={{ color: defaultTextColor }}>
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