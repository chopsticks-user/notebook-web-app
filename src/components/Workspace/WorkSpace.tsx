import React, { useContext, useState } from 'react'
import "./WorkSpace.css"
import { ThemeContext } from '../../App'

type WorkSpaceProps = {
  setDebugInfo: any;
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ setDebugInfo }) => {
  const theme = useContext(ThemeContext);
  // const [width, setWidth] = useState<number>();

  return (
    <div className="workspace-container" onClick={(e) => { setDebugInfo(e.clientX) }}>
      <span id="wclr"></span>
      <div className="workspace"></div>
      <span id="wcrr"></span>
    </div>
  )
}

export default WorkSpace;