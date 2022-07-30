import React, { useEffect, useState, useRef } from "react";
import Split from "react-split";
import DebugView from "./components/DebugView";
import FileManager from "./components/FileManager";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import WorkSpace from "./components/Workspace/WorkSpace";

const sectionThemes = {
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

const generalThemes = {
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
  const defaultsectionThemes = sectionThemes;
  const defaultgeneralTheme = generalThemes.dark;
  let currentsectionThemes = defaultsectionThemes;
  let currentgeneralTheme = defaultgeneralTheme;
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const [rawScripts, setRawScripts] = useState<string>("");

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    currentgeneralTheme = darkTheme ? generalThemes.dark : generalThemes.light;
  }

  const resetTheme = () => {
    currentsectionThemes = defaultsectionThemes;
  }

  return (
    <>
      <div className="page-container" onDoubleClick={toggleTheme}>
        <Header
          sectionThemes={currentsectionThemes.header}
          generalTheme={currentgeneralTheme}
        />
        <Split
          className="main-container" gutterSize={1} minSize={0} sizes={[20, 45, 35]} direction="horizontal"
          style={{ backgroundColor: currentgeneralTheme.backgroundColor }}
        >
          <DebugView
            rawScripts={rawScripts}
            sectionThemes={currentsectionThemes.debugView}
            generalTheme={currentgeneralTheme}
          />
          <WorkSpace
            setRawScripts={setRawScripts}
            sectionThemes={currentsectionThemes.workspace}
            generalTheme={currentgeneralTheme}
          />
          <FileManager />
        </Split>
      </div>
      <LoadingPage />
    </>
  );
}

export default App;
