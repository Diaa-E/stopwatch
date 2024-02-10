import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "./styles/reset.css";
import './styles/App.css';
import "./styles/theme";
import { isSmallScreen, toggleMobileMode } from './mobileMode';

function App() {
  const [mobileMode, mobileModeSetter] = useState(isSmallScreen());
  const [darkMode, setDarkMode] = useState(false);

  toggleMobileMode(mobileModeSetter);

  return (
    <div className={`"common" ${darkMode? "dark" : "light"}`}>

    </div>
  )
}

export default App
