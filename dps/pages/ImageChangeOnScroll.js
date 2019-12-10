import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnScroll = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
                primaryImg="/static/speakers/bw/Speaker-187.jpg" 
                secondaryImg="/static/speakers/Speaker-187.jpg" 
                alt="" />
            <ImageToggleOnMouseOver 
                primaryImg="/static/speakers/bw/Speaker-1124.jpg" 
                secondaryImg="/static/speakers/Speaker-1124.jpg"
                alt="" />
        </div>
    );
};

export default ImageChangeOnScroll;