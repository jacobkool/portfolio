import React from 'react';
import './app.css'
import AboutMe from './components/AboutMe'
import Learning from './components/Learning'
import Projects from './components/Projects'
import { useRef } from 'react';

const App: React.FC = () => {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const frameworksRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);

    const executeScroll = (ref:string) => {
        if (aboutMeRef.current && frameworksRef.current && portfolioRef.current) {
        switch(ref) {
            case 'about':
                aboutMeRef.current.scrollIntoView({block: 'start', behavior: 'smooth'});
                break;
            case 'frameworks':
                frameworksRef.current.scrollIntoView({block: 'start', behavior: 'smooth'});
                break;
            case 'learning':
                portfolioRef.current.scrollIntoView({block: 'start', behavior: 'smooth'});
                break;
        }
    }
    
    }

    const projectsData = [
        {
            screenshot: 'https://content.screencast.com/users/jacob.kool/folders/Snagit/media/9c362ffa-d15f-4a01-80bf-47da6c642e2f/04.05.2022-09.55.png',
            name: 'Nba Stats Project',
            Vercel: 'https://nbastats-delta.vercel.app/#/',
            Github: 'https://github.com/jacobkool/NBA-Scores-Players-Teams'
        },
         {
            screenshot: 'https://content.screencast.com/users/jacob.kool/folders/Snagit/media/934502e5-a0ec-42ac-b03b-550cd4b3641e/04.05.2022-09.56.png',
            name: 'React-Redux-Store',
            Vercel: 'https://react-redux-shopping-cart-jacobkool.vercel.app/',
            Github: 'https://github.com/jacobkool/React-Redux-Shopping-Cart'
        },
        {
            screenshot: 'https://content.screencast.com/users/jacob.kool/folders/Snagit/media/96e428ea-8796-4962-88a2-e9a45f34d2b4/04.05.2022-09.54.png',
            name: 'React-Redux-Store',
            Vercel: 'https://react-todo-app-olive.vercel.app/',
            Github: 'https://github.com/jacobkool/react-todo-app'
        }
    ];
   
    return (
        <div className='app_container'>
            <header className='header'>
                <div className='header__jake'>
                    Jake Kool -- Front-End Portfolio
                </div>
                <div className='header__about_me' onClick={() => executeScroll('about')}>About Me</div>
                <div className='header__frameworks' onClick={() => executeScroll('frameworks')}>My Tech Stack && Learning</div>
                <div className='header__learning' onClick={() => executeScroll('learning')} >Projects</div>
            </header>
            <div className='body'>
                <div className='about_me' ref={aboutMeRef}>
                    <div>About me:</div>
                    <AboutMe text='THIS IS THE ABOUT ME COMPONENT'/>
                </div>
                <div className="frameworks" ref={frameworksRef}>
                    <Learning object={{name: 'Jake', favNumber: 12}}/>
                </div>
                <div className="projects" ref={portfolioRef}>
                    <Projects projects={projectsData}/>
                </div>
                <div className="footer">
                    THIS IS THE FOOTER
                </div>
            </div>
            
        </div>
    )
}

export default App