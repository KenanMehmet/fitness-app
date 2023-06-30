import React from 'react'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <div type="button"
            className='bodypart' styles={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '40px',
            }}
            onClick={() => {
                console.log(item)
                setBodyPart(item);
            }
            }
        >
            <img src={Icon} alt='dumbbell' style={{
                width: '40px', height: '40px',
            }} />
            <h1>{item}</h1>
        </div>
    )
}

export default BodyPart