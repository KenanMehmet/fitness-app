import React from 'react'
import Button from './Button'
import HeroBannerImage from '../assets/images/banner.png'


const HeroBanner = () => {
    return (
        <div className='banner-wrapper'>
            <div className='hero-banner'>
                <p style={{ color: "#FF2625", fontWeight: "600", fontSize: "26px" }}>Fitness Club</p>
                <p style={{ fontWeight: "700", fontSize: "44px", marginBottom: "23px", marginTop: "30px" }}>
                    Sweat, Smile <br /> and Repeat
                </p>
                <p style={{ fontWeight: "600", fontSize: "22px", lineHeight: "35px", }}>
                    Check out these sweet exercises
                </p>
                <Button
                    text={"ExploreExercises"}
                    iconName={'arrow-right'}
                    link={"#exercises"}
                    onClickFunction={(e) => console.log(process.env.REACT_APP_RAPID_API_KEY)}
                />
                <img src={HeroBannerImage} className='hero-banner-img' />
            </div>
            <div style={{ zIndex: -100, position: "absolute" }}>
                <h1 className='background-text'>Exercise</h1>
            </div>
        </div>
    )
}

export default HeroBanner