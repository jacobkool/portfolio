import React from 'react';
import './app.css'
import AboutMe from './components/AboutMe'
import Learning from './components/Learning'
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
                <div className="learning" ref={portfolioRef}>
                    Projects
                </div>
                <div className="footer">
                    THIS IS THE FOOTER
                </div>
            </div>
            
        </div>
    )
}

export default App