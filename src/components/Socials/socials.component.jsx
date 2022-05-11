import React from 'react'
import {FaLinkedinIn, FaInstagram, FaGithub, FaFacebookF} from 'react-icons/fa'
const Socials = () => {
  return (
    <div className="app__social">
        <div>
           <a href="https://www.linkedin.com/in/bandzyrka/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
           </a> 
        </div>
        <div>
            <a href="https://www.instagram.com/bandzyrka/" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a> 
        </div>
        <div>
            <a href="https://github.com/Bandzyrka" target="_blank" rel="noreferrer">
                <FaGithub />
            </a> 
        </div>
        <div>
        <a href="https://www.facebook.com/wiktor.bandzyra/" target="_blank" rel="noreferrer">    
            <FaFacebookF />
        </a>
        </div>
    </div>
  )
}   

export default Socials