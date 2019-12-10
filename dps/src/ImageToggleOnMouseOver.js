import React from "react";

const ImageTogglerOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    return(
        <img onMouseOver={() => {}} onMouseOut={() => {}}
            src={primaryImg}
            alt=""
        />
    );
};

export default ImageTogglerOnMouseOver;