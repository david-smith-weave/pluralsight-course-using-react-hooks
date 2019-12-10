import React, {useRef, useEffect, useState} from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return ( () => {
            window.removeEventListener("scroll", scrollHandler);
        });
    });

    const [inView, setInView] = useState(false);

    return(
        <img 
            src={primaryImg}
            alt="" ref={imageRef}
        />
    );
};

export default ImageToggleOnMouseOver;