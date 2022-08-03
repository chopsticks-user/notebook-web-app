import React from 'react'
import "./FileManager.css"
import { complex } from "../../modules/src/Complex"

let c1 = new complex(10, 2 - 2);

console.log(c1);
console.log(c1.display());

console.log(0 === -0);


const FileManager = () => {
  return (
    <div className="file-manager-container"></div>
  )
}

export default FileManager;