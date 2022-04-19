import React from 'react';
import { useState } from 'react';
import './learning.css'
import AccordionItem from './AccordionItem';

import {DiHtml5, DiReact, DiSass, DiJavascript1} from 'react-icons/di';
import {SiTypescript, SiRedux} from 'react-icons/si'

interface Props {
    object: {
        name: string;
        favNumber: number;
    }
}

const Learning: React.FC<Props> = (props) => {

    const accordionItemData = {
        HTML: {
            title: 'HTML',
            icon: <DiHtml5/>,
            text: 'I learned HTML and beginner Front-End Development by completing the modules at FreeCodeCamp.org.'
        },
        CSS: {
            title: 'CSS/Sass',
            icon: <DiSass/>,
            text: 'I learned the basics of CSS via FreeCodeCamp. More recently I have taken the CSS/Sass/Grid/Flexbox Masterclass by Jonas Schmedtmann on Udemy.'
        },
        JavaScript: {
            title: 'Javascript',
            icon: <DiJavascript1/>,
            text: 'Like HTML and CSS, I started to learn Javascript via FreeCodeCamp. The first thing I did after FreeCodeCamp was take a JavaScript masterclass by Colt Steel, learning to use JavaScript along with HTML/CSS, and build some of my first projects.'
        },
        React: {
            title: 'React',
            icon: <DiReact/>,
            text: 'I learned React/Hooks/Redux via a Udemy course by Stephen Grider. Learning React is when web development really started to click for me. I have build all projects since taking this course using React.'
        },
        Redux: {
            title: 'Redux',
            icon: <SiRedux/>,
            text: 'As I looked into building more complex projects, I saw the value in adding Redux as a state management tool. I learned Redux alongside React, and have continued to learn Redux via documentation, StackOverflow, and training videos.'
        },
        TypeScript: {
            title: 'TypeScript',
            icon: <SiTypescript/>,
            text: 'I learned TypeScript via a Udemy Course in which I used TypeScript building simple applications. I quickly saw the benefit of Typescript and now use it on all of my projects, including this page!'
        }
    }


    const [active1, setActive1] = useState('HTML');
    const [active, setActive] = useState('React')

    const accordionOneSelect = (title:string) => {
        if (title === active1) {
            setActive1('')
        } else {
            setActive1(title)
        }
    }

    const accordionTwoSelect = (title:string) => {
        if (title === active) {
            setActive('')
        } else {
            setActive(title)
        }
    }

    return (
        <div className='learning-container'>
            <div className="accordion-parent">
                <AccordionItem active={active1} setActive={accordionOneSelect} data={accordionItemData.HTML}/>
                <AccordionItem active={active1} setActive={accordionOneSelect} data={accordionItemData.CSS}/>
                <AccordionItem active={active1} setActive={accordionOneSelect} data={accordionItemData.JavaScript}/>
            </div>
            <div className="accordion-parent">
                <AccordionItem active={active} setActive={accordionTwoSelect} data={accordionItemData.React}/>
                <AccordionItem active={active} setActive={accordionTwoSelect} data={accordionItemData.Redux}/>
                <AccordionItem active={active} setActive={accordionTwoSelect} data={accordionItemData.TypeScript}/>
            </div>
        </div>
    )
}

export default Learning;