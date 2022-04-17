import React from 'react'
import {FaLinkedinIn, FaInstagram, FaGithub, FaFacebookF} from 'react-icons/fa'
const Socials = () => {
  return (
    <div className="app__social">
        <div>
            <FaLinkedinIn />
        </div>
        <div>
            <FaInstagram />
        </div>
        <div>
            <FaGithub />
        </div>
        <div>
            <FaFacebookF />
        </div>
    </div>
  )
}   

export default Socials