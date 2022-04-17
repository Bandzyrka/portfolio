import React from 'react'
import { motion } from 'framer-motion'
import './About.styles.scss'
import images from '../../constants/images'
const abouts = [
    {
        name: 'Web Development',
        description: 'About',
        imgUrl: images.about01   
    },
    {
        name: 'Web Design',
        description: 'About',
        imgUrl: images.about02
    },
    {
        name: 'UX/UI',
        description: 'About',
        imgUrl: images.about03
    },
    {
        name: 'Web Animations',
        description: 'About',
        imgUrl: images.about04
    },]

const About = () => {
  return (
    <>
        <h2 className="head-text" style={{ marginTop: '4rem'}}> 
        I know that <span> Good Apss <br /> Means Good Buisness </span>
        </h2> 
            <div className="app__profiles" id="about">
            {
                abouts.map((about, index) => (
                    <motion.div 
                        className="app__profile-item" 
                        key={about.name + index}
                        whileInView={{ opacity: [0,1] }}
                        transition={{ duration: 1}}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                        >
                        <img src={about.imgUrl} alt={about.name} />
                        <h2 className="bold-text" style={{ marginTop: '20px'}}>{about.name}</h2>
                        <p className="p-text">{about.description}</p>
                    </motion.div>
                ))
            }
            </div>
    </>
  )
}

export default About