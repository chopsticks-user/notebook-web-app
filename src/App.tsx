import React, { useEffect, useState, useRef } from "react";
import Split from "react-split";
import DebugView from "./components/DebugView";
import Terminal from "./components/Terminal";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import WorkSpace from "./components/Workspace/WorkSpace";

const sectionThemes = {
  header: {
    textColor: "#fff"
  },
  debugView: {
    contentFontSize: "14px",
  },
  workspace: {
    scriptFontSize: "15px",
    indexScriptSpacing: "1rem",
    focusedLineBorder: "1px solid #505558",
    focusedlineIndexColor: "red"
  }
}

const generalThemes = {
  dark: {
    backgroundColor: "#1a1c1e",
    sectionHeaderColor: "#252525",
    textColor: "#fff",
    // textColor: "rgb(220, 220, 220)",
    hoveredTextColor: "#fff"
  },
  light: {
    backgroundColor: "#fff",
    // backgroundColor: "rgb(228, 217, 217)",
    sectionHeaderColor: "rgb(211, 203, 203)",
    // textColor: "#222",
    textColor: "rgb(37, 37, 37)",
    hoveredTextColor: "#fff"
  }
};

const App = () => {
  const defaultsectionThemes = sectionThemes;
  const defaultgeneralTheme = generalThemes.dark;
  let currentSectionThemes = defaultsectionThemes;
  const [generalTheme, setGeneralTheme] = useState<any>(defaultgeneralTheme);
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const [rawScripts, setRawScripts] = useState<string>("");

  useEffect(() => {
    setGeneralTheme(darkTheme ? generalThemes.dark : generalThemes.light);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(darkTheme => !darkTheme);
  }

  // const resetTheme = () => {
  //   currentSectionThemes = defaultsectionThemes;
  // }

  return (
    <>
      <div className="page-container">
        <Header
          sectionThemes={currentSectionThemes.header}
          generalTheme={generalTheme}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
        <Split
          className="main-container"
          gutterSize={1} minSize={0} sizes={[20, 45, 35]} direction="horizontal"
          style={{ backgroundColor: generalTheme.backgroundColor }}
        >
          <DebugView
            rawScripts={rawScripts}
            sectionThemes={currentSectionThemes.debugView}
            generalTheme={generalTheme}
          />
          <WorkSpace
            setRawScripts={setRawScripts}
            sectionThemes={currentSectionThemes.workspace}
            generalTheme={generalTheme}
          />
          <Terminal
            rawScripts={rawScripts}
          />
        </Split>
      </div>
      <LoadingPage />
    </>
  );
}

export default App;
