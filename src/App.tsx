import React, { useEffect, useState, useRef } from "react";
import Split from "react-split";
import DebugView from "./components/DebugView";
import FileManager from "./components/FileManager";
import Header from "./components/Header";
import LoadingPage from "./components/LoadingPage";
import WorkSpace from "./components/Workspace/WorkSpace";

const themes = {
  dark: {
    textColor: "#fff"
  },
  light: {
    textColor: "#000000"
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
      <div className="page-container" onDoubleClick={toggleTheme}>
        <Header />
        <Split className="main-container" gutterSize={1} minSize={100} direction="horizontal"
          style={{ backgroundColor: darkTheme ? "#1a1c1e" : "#fff" }}
        >
          <FileManager />
          <WorkSpace setDebugInfo={setDebugInfo} />
          <DebugView debugInfo={debugInfo} />
        </Split>
      </div>
      <LoadingPage />
    </ThemeContext.Provider>
  );
}

export default App;
