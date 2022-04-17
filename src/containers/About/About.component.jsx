import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.styles.scss'
import {client, urlFor} from '../../client'
import AppWrapper from '../../wrapper/AppWrapper'

const About = () => {

  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data) =>{
        setAbouts(data)
    })
  }, [])
  
  return (
    <>
        <h2 className="head-text" style={{ marginTop: '4rem'}}> 
        I know that <span> Good Apss </span> <br /> Means <span> Good Buisness </span>
        </h2> 
            <div className="app__profiles">
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
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: '20px'}}>{about.title}</h2>
                        <p className="p-text">{about.description}</p>
                    </motion.div>
                ))
            }
            </div>
    </>
  )
}

export default AppWrapper(About, 'about', 'app_whitebg',)