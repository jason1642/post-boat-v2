import  {useDarkMode} from "./styles/dark-mode/useDarkMode.js"
import './App.css';
import React, { useState, useEffect } from 'react';
import SiteRoutes from './components/Routes.js';
import Header from './components/header/Header.tsx';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./styles/dark-mode/globalStyles.js";
import { lightTheme, darkTheme } from "./styles/dark-mode/themes.js"
import {removeActive} from './components/api-helpers/user-api.ts'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators, userActions, socketActions } from './redux/index.ts'
import { useParams } from "react-router-dom";

import axios from 'axios'
import _ from "lodash";


function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const url = window.location.hostname === 'localhost' ? 'http://localhost:3880' : 'https://postboat.herokuapp.com'

  // const allParams = useParams()
  const currentUser = useSelector((state) => state.currentUser)
  const socket = useSelector((state) => state.socket)
  const dispatch = useDispatch()
  const [didAutheticate, setDidAuthenticate] = useState(true)
  const [isResolved, setIsResolved] = useState(false)


  // Returns the state from the store.js folder in redux
  const { verifyUser } = bindActionCreators(userActions, dispatch)
  const { createSocket } = bindActionCreators(socketActions, dispatch)

  const handleVerify = async () => {
    await verifyUser().then(e => {
      // console.log(e)
      currentUser.authenticated ?
    setDidAuthenticate(true) :
    setDidAuthenticate(false);
    }, err=>console.log(err))
    setIsResolved(true)
    
  }

  useEffect(() => {
    // console.log(allParams)
   
    
    handleVerify()
    
    

    // return async () => currentUser._id && await removeActive(currentUser._id)
      
      
    // console.log(currentUser)
  }, [])
  

  useEffect(() => {
    console.log(currentUser._id)
    if (currentUser._id) {
      createSocket(currentUser._id, url)
     
    
      
    }
    if (socket.connected) {
      return () => socket.close()
    }
    }, [currentUser]);
  // returns an object with action methods from imported action folder
  // should be deconstructed
  // Can be used to manipulate the state, given a function with the parameter of the value being used to change the state 
// useEffect(() => {
//   // console.log(currentUser)

//     verifyUser()
// }, []);





  return (
    <ThemeProvider theme={themeMode}>

        <GlobalStyles />
        
        <div className="App">
         
          <Header currentUser={currentUser} themeToggler={themeToggler} theme={theme} />
          
        {
        isResolved && <SiteRoutes currentUser={currentUser}/>
    
      }
      
    </div>

    </ThemeProvider>
  );
}

export default App;
