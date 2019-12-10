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

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }

        return false; 
    };

    return(
        <img 
            src={primaryImg}
            alt="" ref={imageRef}
        />
    );
};

export default ImageToggleOnMouseOver;