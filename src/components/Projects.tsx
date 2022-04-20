import React from 'react';
import './projects.css'

import Carousel from 'react-elastic-carousel'

type ProjectType = {
    screenshot: string,
    name: string,
    Vercel: string,
    Github: string,
}

interface Props {
  projects: ProjectType[];
}

const Projects: React.FC<Props> = (props) => {

    const keyGenerator = () => {
        return Math.floor(Math.random() * 100)
    }

    const renderList = (projects: ProjectType[]) => {
        return projects.map((item) => {
            return (
                <div key={keyGenerator()} className='project-container'>
                    <img className='image' src={item.screenshot} alt={item.name}/>
                    <div className='buttons'>
                        <button className='project-link'>
                            <a href={item.Vercel}>Vercel Link</a>
                        </button>
                        <button className='github-link'>
                            <a href={item.Github}>GitHub Repo</a>
                        </button>
                </div>
            </div>
            )
        })
    }
       

    return (
        <div className='carousel-container'>
            <Carousel isRTL={false}>
               {renderList(props.projects)}
            </Carousel>
        </div>
    )

}


export default Projects;
