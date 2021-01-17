import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";
 

const ImageList=(props)=>{
    const imgs=props.images.map((image)=>{
        // for key ref Lect:9 vid:4,5
        return <ImageCard key={image.id}image={image} />
    });
    return (
            <div className="imgList">{imgs}</div>     
    );
}

export default ImageList; 