import React from 'react'

const works = [
    {
        title: 'E-commerce shop',
        description: '',
        imgUrl: ''
    },
    {
        title: 'Modern Ux',
        description: '',
        imgUrl: ''
    },
    {
        title: 'Houser',
        description: '',
        imgUrl: ''
    },
]

const Work = () => {
  return (
    <div className="app_work">
        <div className="app_works">
            {
                works.map(work =>(
                    <div className="app-work-item">
                        <img src={work.imgUrl} alt={work.title} />
                        <h2 className="bold-text"> work.title </h2>
                        <p className="p-text"> work.description </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work