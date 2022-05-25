import { ThemeProvider } from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import Intro from "./components/Intro";
import Home from "./components/Home";

import {
  GlobalStyles,
  darkTheme,
  lightTheme,
} from "./components/theme/GlobalStyle";
import { useDarkMode } from "./components/theme/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route
          path="/breeds"
          exact
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route path="*" element={<Navigate to="/breeds" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
