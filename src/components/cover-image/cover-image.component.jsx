import React from 'react'; 

import './cover-image.styles.sass'; 


const CoverImage = ({imgUrl, filter, height, position, text}) => {

    const styles = {
        backgroundImage: filter ? `linear-gradient(${filter}), url(${imgUrl})` : `url(${imgUrl})`,
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