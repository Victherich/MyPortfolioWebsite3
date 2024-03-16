import React from 'react'
import { useContext } from 'react'
import { Context } from './Context'
import '../CSS/About.css'
import AboutImg from '../Images/AboutImgB.png'
import { Link } from 'react-router-dom'


const About = () => {
    const {theme}=useContext(Context)
   

  return (
    <div className={theme?'AboutWrapLight':'AboutWrap'} id="about">
      <div className={theme?'AboutLight':'About'}>
        <div className='AboutLeft'>
          <img src={AboutImg} alt="AboutImg"/>
        </div>
        <div className='AboutRight'>
          <h1>About</h1>
          <p>I am a Proficient web developer with good knowledge of HTML, CSS, JavaScript, React, UI/UX, and GitHub, 
            I breathe life into innovative projects. Whether crafting user-friendly bank apps, 
            optimizing task management systems, or designing engaging real estate, e-commerce websites and any kind of application,
             my commitment to excellence is unwavering. Beyond the code, my personal character adds a distinctive 
             touch to each project. Join me in transforming ideas into interactive realities, 
             where creativity seamlessly merges with functionality.</p>
             <br/>
             <Link to={"/certificate"}className={theme?'AboutLinkLight':'AboutLink'}>Click to View Certification</Link>
             {/* <Link>Click to Explore</Link> */}
        </div>
        
      </div>
    </div>
  )
}

export default About
