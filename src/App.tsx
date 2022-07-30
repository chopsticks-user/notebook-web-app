import React, { useEffect, useState, useRef } from "react";
import Split from "react-split";
import DebugView from "./components/DebugView";
import FileManager from "./components/FileManager";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import WorkSpace from "./components/Workspace/WorkSpace";

const commonTheme = {
  header: {

  },
  debugView: {

  },
  workspace: {
    scriptFont: "",
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
    hoveredTextColor: "#fff"
  },
  light: {
    backgroundColor: "#fff",
    textColor: "#000000",
    hoveredTextColor: "#fff"
  }
};

const App = () => {
  const defaultCommonTheme = commonTheme;
  const defaultColorTheme = colorThemes.dark;
  let currentCommonTheme = defaultCommonTheme;
  let currentColorTheme = defaultColorTheme;
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const [rawScripts, setRawScripts] = useState<string|null>("");

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
        <Header
          commonTheme={currentCommonTheme.header}
          colorTheme={currentColorTheme}
        />
        <Split
          className="main-container" gutterSize={1} minSize={0} sizes={[20, 45, 35]} direction="horizontal"
          style={{ backgroundColor: currentColorTheme.backgroundColor }}
        >
          <DebugView
            rawScripts={rawScripts}
            commonTheme={currentCommonTheme.debugView}
            colorTheme={currentColorTheme}
          />
          <WorkSpace
            setRawScripts={setRawScripts}
            commonTheme={currentCommonTheme.workspace}
            colorTheme={currentColorTheme}
          />
          <FileManager />
        </Split>
      </div>
      <LoadingPage />
    </>
  );
}

export default App;
