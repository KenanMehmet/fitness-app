import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const getIconFromName = (iconName) => {
    console.log(iconName)
    switch (iconName) {
        case ('arrow-right'):
            return <AiOutlineArrowRight />;
        default:
            return <p>Nothing</p>;
    }
}


const Button = ({ text, iconName, link }) => {
    const icon = getIconFromName(iconName);
    return (
        <button href={link}>
            <span className='button-text'>{text}</span>
            <span className='button-icon'>{icon}</span>
        </button>
    )
}

export default Button