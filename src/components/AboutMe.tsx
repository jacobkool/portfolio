import React from 'react';
import './aboutMe.css'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
import {GrRotateLeft} from 'react-icons/gr'


interface Props {
    text: string
}

const AboutMe: React.FC<Props> = (props) => {
    const [isOneFlipped, setOneIsFlipped] = useState(false);
    const [isTwoFlipped, setTwoIsFlipped] = useState(false);
    const [isThreeFlipped, setThreeIsFlipped] = useState(false);
    const [isFourFlipped, setFourIsFlipped] = useState(false);
    const [isFiveFlipped, setFiveIsFlipped] = useState(false);

    const cardFlipper = (button:string) => {
        switch(button){
            case 'one':
                setOneIsFlipped(!isOneFlipped);
                break;
            case 'two':
                setTwoIsFlipped(!isTwoFlipped);
                break;
            case 'three':
                setThreeIsFlipped(!isThreeFlipped);
                break;
            case 'four':
                setFourIsFlipped(!isFourFlipped);
                break;
            case 'five':
                setFiveIsFlipped(!isFiveFlipped);
                break;
        }
            
    }

    return (
        <div className='about_me_container'>

            <div className="about_me_container__card1">
                <ReactCardFlip isFlipped={isOneFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            Education
                        </div>
                        <button onClick={() => cardFlipper('one')}>Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            I attended Azusa Pacific University in Los Angeles. I graduated with a 3.8 GPA in business with the intent of going to law school.
                        </div>
                        <button onClick={() => cardFlipper('one')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="about_me_container__card2">
                <ReactCardFlip isFlipped={isTwoFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            Post-Grad
                        </div>
                        <button onClick={() => cardFlipper('two')}>Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            With my brother working as a lawyer, I saw the lifestyle was not something I would be interested in. Looking for my passion, I worked in talent management, hospitality, and sales. 
                        </div>
                        <button onClick={() => cardFlipper('two')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="about_me_container__card3">
                <ReactCardFlip isFlipped={isThreeFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            <div>
                                Software 
                            </div>
                            <div>
                                +
                            </div>
                            <div>
                                Resume
                            </div>
                        </div>
                    <button onClick={() => cardFlipper('three')}>Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            <div>
                                <div>
                                    I finally found my passion in software, which brings a lot of problem solving and critical thinking to my day, and makes everyday exciting. 
                                </div> 
                                <div>+</div> 
                                <a className='resume-link' href='./work_resume/work_resume.pdf' download>Checkout My Resume</a>
                            </div>   
                        </div>
                        <button onClick={() => cardFlipper('three')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="about_me_container__card4">
                <ReactCardFlip isFlipped={isFourFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            Fun Fact
                        </div>
                    <button onClick={() => cardFlipper('four')}>Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            I am a game show winner. When I was 19 years old I won $28,350 on the CW's 'Oh Sit'. 
                        </div>
                        <button onClick={() => cardFlipper('four')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="about_me_container__card5">
                <ReactCardFlip isFlipped={isFiveFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            Get in touch
                        </div>
                    <button onClick={() => cardFlipper('five')} >Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            <div>
                                <a className='prof-links' href="mailto:jacobkool11@gmail.com?subject=Contact%20Jake%20Kool&amp;body=Jake,%0D%0A%0D%0A%0D%0A"> Email me </a>
                                <div>+</div>
                                <a className='prof-links' href='www.linkedin.com/in/jacob-kool-a73a3360'>Connect with me on LinkedIn</a>
                            </div>
                        </div>
                        <button onClick={() => cardFlipper('five')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default AboutMe;