import React, { useContext } from 'react'
import FrontEndCertificate from "../Images/Front End Certificate.jpeg"
import "../CSS/Certificate.css"
import { Link } from 'react-router-dom'
import { Context } from './Context'

const Certificate = () => {
  const{theme}=useContext(Context)
  return (
    <div className={theme?'CertificateWrapLight':"CertificateWrap"}> 
        <div className='Certificate'>
            <img src={FrontEndCertificate} alt="Certificate"/>
            
        </div>
        {theme?<Link className="AboutLink AboutLink2" style={{color:"rgb(5, 5, 32)"}}
         to={"/"}>Back to Home</Link>:<Link className="AboutLink AboutLink2"
         to={"/"}>Back to Home</Link>}
    </div>
  )
}

export default Certificate
