import React from "react";
import Image from "../Image/Image.js";

const Col = (props) => (<div className="col-3">
                            <Image random={props.random} image={props.image}/>                    
                        </div>)

export default Col;