import React from 'react';
import './learning.css'

interface Props {
  data: {
    title: string,
    icon: any,
    text: string,
  }
  active: string;
  setActive: React.Dispatch<React.SetStateAction<any>>;
}

const AccordionItem: React.FC<Props> = (props) => {
    return(
        <div className='accordion'>
                <div className="accordion-heading">
                    <div className='container'>
                        <p>{props.data.title}{props.data.icon}</p>
                        <span className='accordion-heading-icon' onClick={() => props.setActive(props.data.title)}>
                            {(props.active === props.data.title ? 'X' : '|||')}                       
                        </span>
                    </div>
                </div>

                <div className={(props.active === props.data.title ? 'show' : '') + ' accordion-content'}>
                    <div className="container">
                        <p className='accordion-content-text'>
                            {props.data.text}
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default AccordionItem;