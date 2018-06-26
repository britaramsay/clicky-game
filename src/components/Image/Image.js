import React from "react";
import './images.css';

const Image = (props) => (<img className="image" alt="1" src={process.env.PUBLIC_URL + props.image.src}/>)

export default Image;