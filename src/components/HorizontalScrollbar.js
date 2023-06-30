import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const {
        scrollPrev,
    } = useContext(VisibilityContext);

    return (
        <button onClick={() => scrollPrev()} className='button-icon'>
            <img src={LeftArrowIcon} alt='left-arrow' />
        </button>
    )
};

const RightArrow = () => {
    const {
        scrollNext,
    } = useContext(VisibilityContext);

    return (
        <button onClick={() => scrollNext()} className='button-icon'>
            <img src={RightArrowIcon} alt='right-arrow' />
        </button>
    )
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <div
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                style={{
                    margin: "0 40px"
                }}
            >
                {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <h1 />}
            </div>
        ))}
    </ScrollMenu >
);


export default HorizontalScrollbar

