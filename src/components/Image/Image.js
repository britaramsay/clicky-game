import React from "react";
import './images.css';

const Image = (props) => (<img className="image reseponsive-image" alt="1" onClick={props.random} src={process.env.PUBLIC_URL + props.image.src}/>)

export default Image;