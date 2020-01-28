import React, {useState, useEffect} from 'react'; 

import './cover-image.styles.sass'; 

const CoverImage = ({bgImg, bgImgMobile, filter, height, position, text}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
    console.log(windowWidth)

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    }
  
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
  
        return () => {
           window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const styles = {
        backgroundImage: filter ? `linear-gradient(${filter}), url(${windowWidth >= 650 ? bgImg : bgImgMobile})` : `url(${windowWidth >= 650 ? bgImg : bgImgMobile})`,
        backgroundPosition: position,
        minHeight: height
    };

    return(
        <div 
            className="cover-image"
            style={styles}
        >
            {text ? (
                <div className="container">
                    <h2 className="text">
                        {text}
                    </h2>
                </div>
            ) : null}
        </div>
    );
}
export default CoverImage; 