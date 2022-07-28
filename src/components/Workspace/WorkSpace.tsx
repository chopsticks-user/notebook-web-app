import React, { useContext, useState } from "react"
import "./WorkSpace.css"

type WorkSpaceProps = {
  setDebugInfo: React.Dispatch<React.SetStateAction<any[]>>;
  theme: any;
}

const WorkSpace: React.FC<WorkSpaceProps> = ({ setDebugInfo, theme }) => {

  return (
    <div className="workspace-container" onClick={(e) => { setDebugInfo([e.clientX, e.clientX]) }}>
      <div className="workspace"></div>
    </div>
  );
}

export default WorkSpace;