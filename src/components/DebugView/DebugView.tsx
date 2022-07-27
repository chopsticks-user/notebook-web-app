import React, { ReactElement, useContext } from "react"
import { ThemeContext } from "../../App"
import Split from "react-split"
import "./DebugView.css"

type DebugViewProps = {
  debugInfo: any;
}

const DebugView: React.FC<DebugViewProps> = ({ debugInfo }) => {
  const theme = useContext(ThemeContext);

  return (
    <Split gutterSize={1} minSize={25} direction="vertical"
      className="debug-view-container"
      style={{ color: theme.textColor }}
    >
      <DebugSection domElementID="variables" sectionName="VARIABLES" feature={<Feature />} />
      <DebugSection domElementID="watch-list" sectionName="WATCH LIST" feature={<Feature />} />
      <DebugSection domElementID="timeline" sectionName="TIMELINE" feature={<Feature />} />
    </Split>
  );
}

type DebugSectionProps = {
  domElementID: string;
  sectionName: string;
  feature: ReactElement<any>;
}

const DebugSection: React.FC<DebugSectionProps> = ({ domElementID, sectionName, feature }) => {
  const dropDownIcon: string = ">";
  return (
    <div className="debug-view-section-container"
      id={domElementID}
    >
      <header className="debug-view-section-header">
        <div className="dropdown-icon-arrow">{dropDownIcon}</div>
        <b>{sectionName}</b>
      </header>
      <div className="debug-view-section-content">
        {feature}
      </div>
    </div>
  );
}

const Feature = () => {
  return <span></span>;
}

export default DebugView;