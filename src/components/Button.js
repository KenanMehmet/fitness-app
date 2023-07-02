import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'


const getIconFromName = (iconName) => {
    switch (iconName) {
        case ('arrow-right'):
            return <AiOutlineArrowRight />;
        default:
            return false;
    }
}

const Button = ({ text, iconName, link, onClickFunction }) => {
    const handleClick = () => {
        console.log(onClickFunction)
        onClickFunction()
    }
    const icon = getIconFromName(iconName);
    if (icon) {
        return (
            <button onClick={handleClick} className='default-button'>
                <span className='button-text'>{text}</span>
                <span className='button-icon'>{icon}</span>
            </button>
        )
    }
    return (
        <button href={link} onClick={handleClick} className='default-button'>
            <span className='button-text'>{text}</span>
        </button>
    )
}

export default Button