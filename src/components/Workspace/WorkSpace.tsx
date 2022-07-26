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
    <div className="workspace-container"
      style={{
        borderLeft: theme.border,
        borderRight: theme.border,
        // width: `${200}px`
      }}
      onClick={(e) => { setDebugInfo(e.clientX) }}
    >
      <div className="workspace">

      </div>
    </div>
  )
}

export default WorkSpace;