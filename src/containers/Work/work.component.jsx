import React, {useState, useEffect} from 'react'
import {client, urlFor} from '../../client'
import {motion} from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import './work.styles.scss'
import AppWrapper from '../../wrapper/AppWrapper'

const Work = () => {
  const [works, setWorks] = useState([])
  const [filterWorks, setFilterWorks] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  
  useEffect(() => {
    const query = '*[_type=="works"]'
    client.fetch(query).then((data) =>
        {
          setWorks(data);
          setFilterWorks(data);
      }
    )
  }, [])
  const handleFilter = (filter) => {
    setActiveFilter(filter)
    setAnimateCard([{y: 100, opacity: 0}])
    
    setTimeout(() =>  {
      
      setAnimateCard([{y: 0, opacity: 1}])
    if(filter === 'All') {
      setFilterWorks(works);
    }
    else{
      setFilterWorks(works.filter((work) => work.tags.includes(filter)))
    }
    }, 500)
  }
    return (
    <>
        <h2 className="head-text" > 
            My Creative <span>Portfolio</span> Section
        </h2>
        <div className="app__work-filter">
        {
          ['All', "UX/UI", "React JS", 'Web App', 'Website'].map((filter, index) => (
            <div 
              className={`app__work-filter-item p-text app__flex ${activeFilter === filter ? 'item-active' : ''}`} 
              key={filter+index}
              onClick={() => handleFilter(filter)}> 
              {filter}
            </div>
          ))
        }
        </div>
        <motion.div 
          className="app__work-portfolio"
          animate={animateCard}
          transition={{duration: 0.6, delayChildren: 0.6, ease: 'easeInOut'}} 
          >
          {
                filterWorks.map((work, index) =>(
                    <div 
                    className="app__work-item app__flex" key={index+work.title}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
                ))
            }
        </motion.div>
    </>
  )
}

export default AppWrapper(Work, 'work')