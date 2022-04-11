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

    const renderList = (projects: ProjectType[]) => {
        return projects.map((item) => {
            return (
                <div className='project-container'>
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
            <Carousel>
               {renderList(props.projects)}
            </Carousel>
        </div>
    )

}


export default Projects;
