import React, { createRef, useContext } from "react"
import "./DebugView.css"
import { ThemeContext } from "../../App"
import Split from "react-split"

type DebugViewProps = {
  debugInfo: any;
}

const DebugView: React.FC<DebugViewProps> = ({ debugInfo }) => {
  const theme = useContext(ThemeContext);

  return (
    <Split gutterSize={1} minSize={25} direction="vertical"
      className="debug-view-container" style={{ color: theme.textColor }}>
      <div className="debug-view-section-container" id="variables">
        <header className="debug-view-section-header">
          <div className="dropdown-icon-arrow">{">"}</div>
          <b>VARIABLES</b>
        </header>
        <div className="debug-view-section-content">
          {debugInfo}
        </div>
      </div>
      <div className="debug-view-section-container" id="watch-list">
        <header className="debug-view-section-header">
          <div className="dropdown-icon-arrow">{">"}</div>
          <b>WATCH LIST</b>
        </header>
        <div className="debug-view-section-content">

        </div>
      </div>
      <div className="debug-view-section-container" id="timeline">
        <header className="debug-view-section-header">
          <div className="dropdown-icon-arrow">{">"}</div>
          <b>TIMELINE</b>
        </header>
        <div className="debug-view-section-content">

        </div>
      </div>
    </Split>
  )
}

export default DebugView;