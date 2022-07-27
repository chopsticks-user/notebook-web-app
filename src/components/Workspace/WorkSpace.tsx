import React, { useContext, useState } from 'react'
import "./WorkSpace.css"
import { ThemeContext } from '../../App'

type WorkSpaceProps = {
  setDebugInfo: any;
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ setDebugInfo }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="workspace-container" onClick={(e) => { setDebugInfo(e.clientX) }}>
      <div className="workspace"></div>
    </div>
  )
}

export default WorkSpace;