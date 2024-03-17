import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/OtherProjects.css"
import { Context } from './Context'

const OtherProjects = () => {
    const {theme}=useContext(Context)
  return (
    <div className={theme?'OtherProjectsWrapLight':"OtherProjectsWrap"}>
        <div className='OtherProjects'>
            <div className={theme?'OtherProjectLight':"OtherProject"}>
                <h1>Flex Banking Application</h1>
                <h2><strong>Scope: </strong>Finance Tech.</h2>
                <p><strong>Description: </strong>A banking Application that allows users to create account and recieve an acoount number.
                This React-based Banking Application enables users to effortlessly
           manage their finances. With features like balance inquiry, fund transfers,
            transaction history viewing and payment of bills.</p>
                <p className={theme?'StatusLight':"Status"}><strong>Status: </strong>In Progress...</p>
            </div>

            <div className={theme?'OtherProjectLight':"OtherProject"}>
                <h1>Kanban task Management Application</h1>
                <h2><strong>Scope: </strong>Administartion and Management</h2>
                <p><strong>Description: </strong>This project offers 
users a seamless experience in creating, editing, and deleting 
tasks across customizable boards and categories like 
"ToDo," "Doing," and "Done." With an intuitive interface, 
it promotes efficient task management, empowering users 
to enhance productivity and stay organized effortlessly.</p>
                <p className={theme?'StatusLight':"Status"}><strong>Status: </strong>In Progress...</p>
            </div>

            <div className={theme?'OtherProjectLight':"OtherProject"}>
                <h1>Hadassah Premium</h1>
                <h2><strong>Scope: </strong>E-Commerce</h2>
                <p><strong>Description: </strong>This e-commerce website, meticulously designed, offers users a seamless
           shopping experience. They can explore product lists, add desired items
            to their cart, and securely complete transactions through a reliable payment
             gateway, ensuring a smooth and secure checkout process. It's a user-friendly
           platform for convenient online shopping and secure transactions.</p>
                <p className={theme?'StatusLight':"Status"}><strong>Status: </strong>In Progress...</p>
            </div>

            {theme?<Link className="AboutLink AboutLink2"
            style={{color:"rgb(5, 5, 32)"}}
         to={"/"}>Back to Home</Link>:<Link className="AboutLink AboutLink2"
         style={{color:"bisque"}}
      to={"/"}>Back to Home</Link>}
        </div>
    </div>
  )
}

export default OtherProjects
