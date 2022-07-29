import React, { useEffect, useState, useRef } from "react";
import Split from "react-split";
import DebugView from "./components/DebugView";
import FileManager from "./components/FileManager";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import WorkSpace from "./components/Workspace/WorkSpace";

const commonTheme = {
  debugView: {

  },
  workspace: {
    scriptFontSize: "15px",
    indexScriptSpacing: "1rem",
    focusedLineBorder: "1px solid #505558",
    focusedlineIndexColor: "red"
  }
}

const colorThemes = {
  dark: {
    backgroundColor: "#1a1c1e",
    textColor: "#fff",
  },
  light: {
    backgroundColor: "#fff",
    textColor: "#000000",
  }
};

function App() {
  const defaultCommonTheme = commonTheme;
  const defaultColorTheme = colorThemes.dark;
  let currentCommonTheme = defaultCommonTheme;
  let currentColorTheme = defaultColorTheme;
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const [debugInfo, setDebugInfo] = useState<any[]>([]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    currentColorTheme = darkTheme ? colorThemes.dark : colorThemes.light;
  }

  const resetTheme = () => {
    currentCommonTheme = defaultCommonTheme;
  }

  return (
    <>
      <div className="page-container" onDoubleClick={toggleTheme}>
        <Header />
        <Split
          className="main-container" gutterSize={1} minSize={0} direction="horizontal"
          style={{ backgroundColor: currentColorTheme.backgroundColor }}
        >
          <FileManager />
          <WorkSpace
            setDebugInfo={setDebugInfo}
            commonTheme={currentCommonTheme.workspace}
            colorTheme={currentColorTheme}
          />
          <DebugView
            debugInfo={debugInfo}
            commonTheme={currentCommonTheme.debugView}
            colorTheme={currentColorTheme}
          />
        </Split>
      </div>
      <LoadingPage />
    </>
  );
}

export default App;
