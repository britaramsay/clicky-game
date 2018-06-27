import React from "react";
import Col from '../Col/Col.js';
import './row.css';

const Row = (props) => (<div className="row">
                            <div><Col random={props.random} image={props.one}/></div>
                            <div><Col random={props.random} image={props.two}/></div>
                            <div><Col random={props.random} image={props.three}/></div> 
                            <div><Col random={props.random} image={props.four}/></div>                                                                       
                        </div>)

export default Row;