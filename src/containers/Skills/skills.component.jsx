import React, {useState, useEffect}from 'react'
import {client, urlFor} from '../../client'
import AppWrapper from '../../wrapper/AppWrapper'
import {motion} from 'framer-motion'
import './skills.styles.scss'
export const Skills = () => {
  const [skills, setSkills] = useState([])
  const [exp, setExp] = useState([])
  useEffect(() => {
    const skillsQuery = '*[_type=="skills"]'
    const expQuery = '*[_type=="experiences"]'
    client.fetch(skillsQuery).then((data) =>
        {
          setSkills(data)
      }
    )
    client.fetch(expQuery).then((data) =>
        {
          setExp(data)
          console.log(data)
        })
  }, [])
  
    return (
    <>
    <h2 className="head-text"> My <span>Skills </span>& <span >Experience </span></h2>
    <div className="app__skills app_flex">
        <div 
            className="app__skills-list">
        {
            skills.map((skill, index) =>(
                <motion.div 
                    whileInView={{ scale: [0, 1.1, 1]}}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    className="app__skills-container" key={index+skill.name}>
                    <div className="app__skills-item-icon" >
                        <img src={urlFor(skill.icon)} alt={skill.name} />
                    </div>
                <p className="p-text">{skill.name}</p>
                </motion.div>
            ))
        }
        </div>
        <div 
            className="app__skills-exp"
            >
        {
            exp.map(year => (
                <div className="app__skills-exp-year">
                    <h2 className="bold-text">{year.year}</h2>
                    <div className={year.year !== '2022' ? 'vl ': ''} />
                    <div className="app__skills-exp-works">
                    {
                        year?.works?.map(work => (
                            <motion.div 
                                className="app__skills-exp-work"
                                whileInView={{opacity: [0, 1] }}
                                transition={{ duration: 1}}>    
                                <h3>{work.name}</h3>
                                <p className="p-text">{work.company}</p>
                            </motion.div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
        </div>
    </div>
    </>
    )
}
export default AppWrapper(Skills, 'skills')