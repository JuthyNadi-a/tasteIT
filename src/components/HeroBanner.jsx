import React from 'react';
import classes from './HeroBanner.module.css';

const HeroBanner = () => {
    return (
        <div>
            <video loop autoPlay className={classes.bannerVideo}>
                {/* Video by Pressmaster: https://www.pexels.com/video/a-variety-of-sliced-vegetables-being-grilled-3192258/ */}
                <source src = {require('../components/assets/banner_video.mp4')} type = "video/mp4"/>
            </video>
        </div>
    );
};

export default HeroBanner;