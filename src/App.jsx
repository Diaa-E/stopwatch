import { useEffect, useState } from 'react';
import "./styles/reset.css";
import './styles/App.css';
import "./styles/theme.css";
import { isSmallScreen, toggleMobileMode } from './mobileMode';
import NavBar from './components/NavBar';
import { tabs } from './tabs';
import Stopwatch from './components/Stopwatch';
import { v4 as generateId } from 'uuid';
import LapsList from './components/LapsList';
import Timer from './components/Timer';

function App({useDarkMode}) {

  const [mobileMode, setMobileMode] = useState(isSmallScreen());
  const [darkMode, setDarkMode] = useState(useDarkMode);
  const [activeTab, setActiveTab] = useState(tabs.stopwatch);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [countdown, setCountdown] = useState(15 * 60);
  const [oldCountdown, setOldCountdown] = useState(countdown);
  const [stopwatchPaused, setStopwatchPaused] = useState(true);
  const [countdownPaused, setCountdownPaused] = useState(true);
  const [timerEditMode, setTimerEditMode] = useState(true);
  const [laps, setLaps] = useState([]);

  toggleMobileMode(setMobileMode);

  function toggleDarkMode()
  {
    setDarkMode(darkMode => !darkMode);
  }

  function changeActiveTab(tabId)
  {
    setActiveTab(tabId);
  }

  function addLap(newLap)
  {
    const lapsCopy = [...laps];
    setLaps([{id: generateId(), value: newLap}, ...lapsCopy]);
  }

  function notifyTimerExpiry()
  {
    if (!"notification" in window)
    {
      alert("This browser does not support notifications.");
    }
    else if (Notification.permission === "granted")
    {
      const notification = new Notification("Time is up!");
    }
  }

  useEffect(() => {

    Notification.requestPermission();

  }, []);

  useEffect(() => {

    if (countdownPaused) return;

    if (countdown === 0)
    {
      setTimerEditMode(true);
      setCountdownPaused(true);
      setCountdown(oldCountdown);
      notifyTimerExpiry();
      return;
    }

    const secInterval = setInterval(() => {

      setCountdown(countdown => countdown - 1);

    }, 1000);

    return () => {
      clearInterval(secInterval);
    }

  }, [countdownPaused, countdown]);

  useEffect(() => {

    if (stopwatchPaused) return;

    const csInterval = setInterval(() => {

      setStopwatchTime(stopwatchTime => stopwatchTime + 1);
    }, 10);

    return () => clearInterval(csInterval);

  }, [stopwatchPaused]);

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
          paused={stopwatchPaused}
          togglePause={() => setStopwatchPaused(stopwatchPaused => !stopwatchPaused)}
          reset={() => {
            setStopwatchPaused(true);
            setStopwatchTime(0);
            setLaps([]);
          }}
          laps={laps}
          addLap={addLap}
        />
      }
      {
        activeTab === tabs.timer &&
        <Timer
          time={countdown}
          paused={countdownPaused}
          editMode={timerEditMode}
          startTimer={(time) => {
            setTimerEditMode(false);
            setCountdownPaused(false);
            setOldCountdown(time);
            setCountdown(time);
          }}
        />
      }
    </div>
  )
}

export default App
