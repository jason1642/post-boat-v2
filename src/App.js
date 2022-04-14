import  {useDarkMode} from "./styles/dark-mode/useDarkMode.js"
import './App.css';
import React, { useState, useEffect } from 'react';
import SiteRoutes from './components/Routes.js';
import Header from './components/header/Header.tsx';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/dark-mode/globalStyles.js";
import { lightTheme, darkTheme } from "./styles/dark-mode/themes.js"

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators, userActions } from './redux/index.ts'



function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  const currentUser = useSelector((state) => state.currentUser)
  const dispatch = useDispatch()
  const [didAutheticate, setDidAuthenticate] = useState(true)
  const [isResolved, setIsResolved] = useState(false)
  // Returns the state from the store.js folder in redux
  const { verifyUser } = bindActionCreators(userActions, dispatch);
  
  const handleVerify = async () => {
    await verifyUser().then(e => {
      console.log(e)
      currentUser.authenticated ?
    setDidAuthenticate(true) :
    setDidAuthenticate(false);
    }, err=>console.log(err))
    setIsResolved(true)
    
  }
  
  useEffect(() => {

  
    handleVerify()
    
    console.log(currentUser)
  }, [])
  
  // returns an object with action methods from imported action folder
  // should be deconstructed
  // Can be used to manipulate the state, given a function with the parameter of the value being used to change the state 
useEffect(() => {
  console.log(currentUser)

    verifyUser()
}, []);





  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        
        <div className="App">
         
          <Header themeToggler={themeToggler} theme={theme} />
          {
        isResolved && currentUser &&  <h1>USER IS {currentUser.username}</h1>
    
      }
      <SiteRoutes />
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
