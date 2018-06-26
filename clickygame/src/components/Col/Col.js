import React from "react";
import Image from "../Image/Image.js";

const Col = (props) => (<div className="col-3">
                            <Image image={props.image}/>                    
                        </div>)

export default Col;