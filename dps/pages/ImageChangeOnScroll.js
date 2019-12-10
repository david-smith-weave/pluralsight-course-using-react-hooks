import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <div>
            <ImageToggleOnScroll 
                primaryImg="/static/speakers/bw/Speaker-187.jpg" 
                secondaryImg="/static/speakers/Speaker-187.jpg" 
                alt="" />
            <ImageToggleOnScroll 
                primaryImg="/static/speakers/bw/Speaker-1124.jpg" 
                secondaryImg="/static/speakers/Speaker-1124.jpg"
                alt="" />
        </div>
    );
};

export default ImageChangeOnScroll;