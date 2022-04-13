import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import {MdOutlineModeNight, MdModeNight} from "react-icons/md/index.js";
const Button = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-width: 0px;
  color: ${({ theme })=>theme.icon};
  /* color: ${({ theme }) => theme.text}; */
  border-radius: 30px;
  cursor: pointer; 
  font-size:0.8rem;
  height: 35px;
  font-size: 12px;
  padding: 6px;
 `;
const styles = {
  icon: {
    height: '100%',
    width: '100%'
   }
 }
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
        {theme === 'light' ? <MdModeNight style={styles.icon}/> : <MdOutlineModeNight style={styles.icon}/>}
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;