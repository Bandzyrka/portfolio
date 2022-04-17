import React from 'react'
import {FaLinkedin, FaInstagram, FaGithubSquare, FaFacebookSquare} from 'react-icons/fa'
const Socials = () => {
  return (
    <div className="app_social">
        <div>
            {FaLinkedin}
        </div>
        <div>
            {FaInstagram}
        </div>
        <div>
            {FaGithubSquare}
        </div>
        <div>
            {FaFacebookSquare}
        </div>
    </div>
  )
}   

export default Socials