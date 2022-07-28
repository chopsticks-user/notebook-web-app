import React, { useEffect, useState, useRef } from "react";
import Split from "react-split";
import DebugView from "./components/DebugView";
import FileManager from "./components/FileManager";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import WorkSpace from "./components/Workspace/WorkSpace";

const themes = {
  dark: {
    backgroundColor: "#1a1c1e",
    textColor: "#fff"
  },
  light: {
    backgroundColor: "#fff",
    textColor: "#000000"
  }
};

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [debugInfo, setDebugInfo] = useState<any[]>([]);
  let currentTheme = darkTheme ? themes.dark : themes.light;

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  useEffect(() => {
    currentTheme = darkTheme ? themes.dark : themes.light;
  }, [darkTheme]);

  return (
    <>
      <div className="page-container" onDoubleClick={toggleTheme}>
        <Header />
        <Split className="main-container" gutterSize={1} minSize={0} direction="horizontal"
          style={{ backgroundColor: currentTheme.backgroundColor }}
        >
          <FileManager />
          <WorkSpace setDebugInfo={setDebugInfo} theme={currentTheme} />
          <DebugView debugInfo={debugInfo} theme={currentTheme} />
        </Split>
      </div>
      <LoadingPage />
    </>
  );
}

export default App;
