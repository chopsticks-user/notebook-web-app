import React, { useEffect, useState, useRef } from "react";
import Debugger from "./components/Debugger";
import FileManager from "./components/FileManager";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import WorkSpace from "./components/Workspace/WorkSpace";

const themes = {
  dark: {
    border: "1px solid gray",
    fileManagerBarColor: "#2a2a2a",
    fileManagerTextColor: "white",
    workspaceButtonColor: "#2a2a2a",
    workspaceLineBorderColor: "white",
    workspaceTextColor: "white",
    debuggerBarColor: "black",
    debuggerTextColor: "white",
    debuggerGraphGridColor: "white"
  },
  light: {
    border: "1px solid black",
    fileManagerBarColor: "#2a2a2a",
    fileManagerTextColor: "black",
    workspaceButtonColor: "#2a2a2a",
    workspaceLineBorderColor: "black",
    workspaceTextColor: "black",
    debuggerBarColor: "white",
    debuggerTextColor: "black",
    debuggerGraphGridColor: "black"
  }
};

export const ThemeContext = React.createContext(themes.dark);

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [debugInfo, setDebugInfo] = useState();

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme ? themes.dark : themes.light}>
      <div className="page-container" /* onDoubleClick={toggleTheme} */>
        <Header />
        <div className="main-container" style={{ backgroundColor: darkTheme ? "#282c34" : "white" }}>
          <FileManager />
          <WorkSpace setDebugInfo={setDebugInfo} />
          <Debugger debugInfo={debugInfo} />
        </div>
      </div>
      <LoadingPage />
    </ThemeContext.Provider>
  );
}

export default App;
