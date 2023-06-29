import React from 'react'
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                < BodyPart
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                >
                    {item}
                </BodyPart>

            ))
            }
        </div >
    )
}

export default HorizontalScrollbar