import React, { useContext } from 'react';
import Header from './component/Header';
import './CSS/App.css';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import { Context } from './component/Context';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import Certificate from './component/Certificate';
import OtherProjects from './component/OtherProjects';

const App = () => {
  const {theme}=useContext(Context)
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/certificate" element={<Certificate/>}/>
            <Route path="/otherprojects" element={<OtherProjects/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
