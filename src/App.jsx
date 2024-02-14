import { useState } from 'react';
import "./styles/reset.css";
import './styles/App.css';
import "./styles/theme.css";
import { isSmallScreen, toggleMobileMode } from './mobileMode';
import NavBar from './components/NavBar';
import { tabs } from './tabs';
import Stopwatch from './components/Stopwatch';

function App({useDarkMode}) {

  const [mobileMode, setMobileMode] = useState(isSmallScreen());
  const [darkMode, setDarkMode] = useState(useDarkMode);
  const [activeTab, setActiveTab] = useState(tabs.stopwatch);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [stopwatchPaused, setStopwatchPaused] = useState(true);

  toggleMobileMode(setMobileMode);

  function toggleDarkMode()
  {
    setDarkMode(darkMode => !darkMode);
  }

  function changeActiveTab(tabId)
  {
    setActiveTab(tabId);
  }

  return (
    <div id='main' role='main' className={`common ${darkMode? "dark" : "light"} main`}>
      <NavBar
        activeTab={activeTab}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        changeActiveTab={changeActiveTab}
      />
      {
        activeTab === tabs.stopwatch && 
        <Stopwatch
          time={stopwatchTime}
        />
      }
    </div>
  )
}

export default App
