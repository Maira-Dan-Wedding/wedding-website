import React, { useState} from 'react'; 

import './homepage.styles.sass'; 


import IMAGES from './images.data.js'
import Hero from '../../assets/images/min/maira-hero-img-min.jpg';
import HeroMobile from '../../assets/images/min/maira-hero-img-mobile-min.jpg'
import Img from '../../assets/images/min/praia-de-carneiros-min.jpg';
import ImgMobile from '../../assets/images/min/praia-de-carneiros-mobile-min.jpg';


import Welcome from '../../components/welcome/welcome.component';
import ScheduleOverview from '../../components/schedule-overview/schedule-overview.component';
import Travel from '../../components/travel/travel.component';
import CoverImage from '../../components/cover-image/cover-image.component';


const Homepage = () =>{ 
    const [images] = useState(IMAGES);
        return (
        <div className="homepage">
            <CoverImage
                bgImg={Hero}
                bgImgMobile={HeroMobile}
                height={images.img1.height}
                position={images.img1.position}
                text={images.img1.text}
            />
            <Welcome />
            <CoverImage
                bgImg={Img}
                bgImgMobile={ImgMobile}
                height={images.img2.height}
                position={images.img2.position}
            />
            <ScheduleOverview />
            <Travel />
        </div>
    );
}
export default Homepage; 