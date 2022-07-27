import React, { createRef, useContext, useEffect, useRef, useState } from "react"
import "./Debugger.css"
import { ThemeContext } from "../../App"
import Split from "react-split"

type DebuggerProps = {
  debugInfo: any;
}

const Debugger: React.FC<DebuggerProps> = ({ debugInfo }) => {
  const theme = useContext(ThemeContext);
  const [topHeight, setTopHeight] = useState<number>();
  const [bottomHeight, setBottomHeight] = useState<number>();

  return (
    // <Split gutterSize={2} minSize={0} className="debugger-container" style={{ color: theme.debuggerTextColor }}>
    //   <div className="debugger-section-container">

    //     {/* <div className="debugger-section" id="dbg-top">

    //     </div> */}
        
    //   </div>
    //   <div className="debugger-section-container">

    //     {/* <div className="debugger-section" id="dbg-center">

    //     </div> */}
    //   </div>
    //   <div className="debugger-section-container">

    //     {/* <div className="debugger-section" id="dbg-bottom">

    //     </div> */}
    //   </div>

    // </Split>
    <div></div>
  )
}

export default Debugger;