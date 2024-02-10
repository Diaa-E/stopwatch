import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles/reset.css";
import './styles/App.css'
import { isSmallScreen, toggleMobileMode } from './mobileMode';

function App() {
  const [mobileMode, mobileModeSetter] = useState(isSmallScreen());

  toggleMobileMode(mobileModeSetter);

  return (
    <>
    </>
  )
}

export default App
