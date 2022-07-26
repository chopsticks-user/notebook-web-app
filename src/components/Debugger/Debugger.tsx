import React, { createRef, useContext, useEffect, useRef, useState } from "react"
import "./Debugger.css"
import { ThemeContext } from "../../App"

type DebuggerProps = {
  debugInfo: any;
}

const Debugger: React.FC<DebuggerProps> = ({ debugInfo }) => {
  const theme = useContext(ThemeContext);
  const [topHeight, setTopHeight] = useState<number>();
  const [bottomHeight, setBottomHeight] = useState<number>();

  return (
    <div className="debugger-container" style={{ color: theme.debuggerTextColor }}>
      <div className="debugger-section-container"
        style={{
          borderBottom: `${theme.border}`,
          height: `${topHeight}px`
        }}>
        <div className="debugger-section" id="dbg-top">

        </div>
        <span style={{ backgroundColor: theme.border }} onClick={() => setTopHeight(500)}></span>
      </div>
      <div className="debugger-section-container"
        style={{
          borderBottom: `${theme.border}`
        }}>
        <div className="debugger-section" id="dbg-center">

        </div>
      </div>
      <div className="debugger-section-container"
        style={{
          height: `${bottomHeight}px`
        }}>
        <span style={{ backgroundColor: theme.border }} onClick={() => setBottomHeight(500)}></span>
        <div className="debugger-section" id="dbg-bottom">

        </div>
      </div>
    </div>
  )
}

export default Debugger;