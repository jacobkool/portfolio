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
                            I attended Azusa Pacific University in Los Angeles. I graduated with a 3.8 GPA in business with the intent of going Pre-Law.
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
                            With my brother working as a lawyer, I saw the lifestyle was not something I would be interested in. I was making good money bartending in los angeles and stayed there while I figured things out. I explored other careers including sales, and education. 
                        </div>
                        <button onClick={() => cardFlipper('two')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="about_me_container__card3">
                <ReactCardFlip isFlipped={isThreeFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            Software
                        </div>
                    <button onClick={() => cardFlipper('three')}>Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            After holding a variety of jobs, I finally found my passion in Software. As a customer support rep I grew a passion for solving and understanding technical issues, into a career as a Product Support Engineer. 
                        </div>
                        <button onClick={() => cardFlipper('three')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="about_me_container__card4">
                <ReactCardFlip isFlipped={isFourFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            Hobbies
                        </div>
                    <button onClick={() => cardFlipper('four')}>Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            I love watching movies, some favorites are 'Inside Man' and 'The prestige'. I also love video games, like Hearthstone and Fortnite. Another favorite hobby is taking my dog, Scooby-Doo, on hikes and other adventures.
                        </div>
                        <button onClick={() => cardFlipper('four')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
            <div className="about_me_container__card5">
                <ReactCardFlip isFlipped={isFiveFlipped} flipDirection="horizontal">
                    <div className='card-front'>
                        <div className='card-front-text'>
                            Aspirations
                        </div>
                    <button onClick={() => cardFlipper('five')} >Click to flip <GrRotateLeft/></button>
                    </div>

                    <div className='card-back'>
                        <div className='card-back-text'>
                            My goal is to become a front-end developer at a great software company, whose mission and product align with my passions.
                        </div>
                        <button onClick={() => cardFlipper('five')}>Click to flip <GrRotateLeft/></button>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default AboutMe;