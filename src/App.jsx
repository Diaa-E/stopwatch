import { useState } from 'react';
import "./styles/reset.css";
import './styles/App.css';
import "./styles/theme.css";
import { isSmallScreen, toggleMobileMode } from './mobileMode';

function App({useDarkMode}) {
  const [mobileMode, mobileModeSetter] = useState(isSmallScreen());
  const [darkMode, setDarkMode] = useState(useDarkMode);

  toggleMobileMode(mobileModeSetter);

  return (
    <div id='main' role='main' className={`common ${darkMode? "dark" : "light"}`}>

    </div>
  )
}

export default App
