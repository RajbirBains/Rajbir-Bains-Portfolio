import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AboutMe from './components/aboutme/AboutMe'
import Home from './components/home/Home.jsx'
import HomeNavbar from './components/navbar/HomeNavbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeNavbar></HomeNavbar>
      <Home></Home>
      <AboutMe></AboutMe>
    </>
  )
}

export default App
