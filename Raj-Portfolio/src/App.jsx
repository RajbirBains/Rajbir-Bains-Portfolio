import { useState } from 'react'
import './App.css'

import AboutMe from './components/aboutme/AboutMe'
import Home from './components/home/Home.jsx'
import HomeNavbar from './components/navbar/HomeNavbar.jsx'
import Experience from './components/experience/Experience.jsx'
import Projects from './components/projects/Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeNavbar></HomeNavbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects>
    </>
  )
}

export default App
