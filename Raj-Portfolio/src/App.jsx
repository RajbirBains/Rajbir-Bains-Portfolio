import { useState } from 'react'
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
