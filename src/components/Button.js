import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'


const getIconFromName = (iconName) => {
    console.log(iconName)
    switch (iconName) {
        case ('arrow-right'):
            return <AiOutlineArrowRight />;
        default:
            return false;
    }
}


const Button = ({ text, iconName, link, onClickfunction }) => {
    const icon = getIconFromName(iconName);
    if (icon) {
        return (
            <button onClick={onClickfunction}>
                <span className='button-text'>{text}</span>
                <span className='button-icon'>{icon}</span>
            </button>
        )
    }
    return (
        <button href={link}>
            <span className='button-text'>{text}</span>
        </button>
    )
}

export default Button