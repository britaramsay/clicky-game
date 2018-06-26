import React from "react";
import Col from '../Col/Col.js';
import './row.css';

const Row = (props) => (<div className="row">
                            <div><Col image={props.one}/></div>
                            <div><Col image={props.two}/></div>
                            <div><Col image={props.three}/></div> 
                            <div><Col image={props.four}/></div>                                                                       
                        </div>)

export default Row;