import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Button from './Button'
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
    return (
        <div className='hero-banner'>
            <p style={{ color: "#FF2625", fontWeight: "600", fontSize: "26px" }}>Fitness Club</p>
            <p style={{ fontWeight: "700", fontSize: "44px" }}>
                Sweat, Smile <br /> and Repeat
            </p>
            <p style={{ fontWeight: "600", fontSize: "22px", lineHeight: "35px" }}>
                Check out these sweet exercises
            </p>
            <Button text={"ExploreExercises"} iconName={'arrow-right'} link={"#exercises"} />
            <img src={HeroBannerImage} className='hero-banner-img' />
        </div>
    )
}

export default HeroBanner