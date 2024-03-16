import React from 'react'
import FrontEndCertificate from "../Images/Front End Certificate.jpeg"
import "../CSS/Certificate.css"
import { Link } from 'react-router-dom'

const Certificate = () => {
  return (
    <div className='CertificateWrap'> 
        <div className='Certificate'>
            <img src={FrontEndCertificate} alt="Certificate"/>
            
        </div>
        <Link className="AboutLink AboutLink2"
         to={"/"}>Back to Home</Link>
    </div>
  )
}

export default Certificate
