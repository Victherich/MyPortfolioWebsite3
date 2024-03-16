import React, { useContext } from 'react'
import About from './About'
import Header from './Header'
import Hero from './Hero'
import Contact from './Contact'
import Projects from './Projects'
import "../CSS/LandingPage.css"
import { Context } from './Context'

const LandingPage = () => {
    const {theme}=useContext(Context)
  return (
    <div className={theme?'AppLight':'App'}>
        <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default LandingPage
