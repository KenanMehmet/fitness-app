import React from 'react'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <div className='horizontal-scrollbar'>
            {data.map((item) => (
                < div
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                >
                    <BodyPart item={item} BodyPart={BodyPart} setBodyPart={setBodyPart} />
                </div>

            ))
            }
        </div >
    )
}

export default HorizontalScrollbar