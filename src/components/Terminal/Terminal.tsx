import React from 'react'
import "./Terminal.css"
import { complex } from "../../modules/src/typenames/Complex"
import { tokens, defineTypename } from '../../modules/src/compiler/Tokens'
import { processRawScripts } from "../../helpers/ScriptProcessing"
import { Lexer } from "../../modules/src/compiler/Lexer"

type TerminalProps = {
  rawScripts: string;
}

const Terminal: React.FC<TerminalProps> = ({
  rawScripts
}) => {
  return (
    <div className="terminal-container"
      onClick={() => console.log(Lexer.execute(processRawScripts(rawScripts)))}
    >

    </div>
  );
}

export default Terminal;