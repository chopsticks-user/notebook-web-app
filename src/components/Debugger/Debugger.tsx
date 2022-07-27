import React, { createRef, useContext } from "react"
import "./Debugger.css"
import { ThemeContext } from "../../App"
import Split from "react-split"

type DebuggerProps = {
  debugInfo: any;
}

const Debugger: React.FC<DebuggerProps> = ({ debugInfo }) => {
  const theme = useContext(ThemeContext);

  return (
    <Split gutterSize={1} minSize={25} direction="vertical"
      className="debugger-container" style={{ color: theme.textColor }}>
      <div className="debugger-section-container" id="variables">
        <header className="debugger-section-header">
          <div className="dropdown-icon-arrow">{">"}</div>
          <b>VARIABLES</b>
        </header>
        <div className="debugger-section-content">
          {debugInfo}
        </div>
      </div>
      <div className="debugger-section-container" id="watchlist">
        <header className="debugger-section-header">
          <div className="dropdown-icon-arrow">{">"}</div>
          <b>WATCHLIST</b>
        </header>
        <div className="debugger-section-content">

        </div>
      </div>
      <div className="debugger-section-container" id="timeline">
        <header className="debugger-section-header">
          <div className="dropdown-icon-arrow">{">"}</div>
          <b>TIMELINE</b>
        </header>
        <div className="debugger-section-content">

        </div>
      </div>
    </Split>
  )
}

export default Debugger;