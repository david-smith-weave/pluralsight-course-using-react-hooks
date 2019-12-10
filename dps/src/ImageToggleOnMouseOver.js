import React, {useRef} from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    return(
        <img onMouseOver={() => {}} onMouseOut={() => {}}
            src={primaryImg}
            alt="" ref={imageRef}
        />
    );
};

export default ImageTogglerOnMouseOver;