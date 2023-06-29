import React from 'react'

import Icon from '../assets/icons/gym.png'

const BodyPart = (item, bodyPart, setBodyPart) => {
    return (
        <div className='bodypart'>
            <img src={Icon} alt='dumbbell' styles={{
                width: '40px', height: '40px'
            }} />
        </div>
    )
}

export default BodyPart