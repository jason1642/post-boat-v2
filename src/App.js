import  {useDarkMode} from "./styles/dark-mode/useDarkMode.js"
import './App.css';
import React, { useState, useEffect } from 'react';
import SiteRoutes from './components/Routes.js';
import Header from './components/header/Header.tsx';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/dark-mode/globalStyles.js";
import { lightTheme, darkTheme } from "./styles/dark-mode/themes.js"




function App() {
  const [theme, themeToggler] = useDarkMode();

  
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        
        <div className="App">
         
            <Header themeToggler={ themeToggler} theme={theme} />
      <SiteRoutes />
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
