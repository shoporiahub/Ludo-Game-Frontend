import React from "react";


interface IconProps {
    imgSrc: string;
}
const DownArrow = ({ imgSrc } : IconProps ) => {
    return (
        <div>
            <img src= {imgSrc} alt="dropdown" />

        </div>
    )
}
export default DownArrow;   