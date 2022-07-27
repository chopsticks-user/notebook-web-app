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
    <Split gutterSize={1} minSize={20} direction="vertical"
      className="debugger-container" style={{ color: theme.debuggerTextColor }}>
      <div className="debugger-section-container"></div>
      <div className="debugger-section-container"></div>
      <div className="debugger-section-container"></div>
    </Split>
  )
}

export default Debugger;