import React, { Component } from "react";
import Row from "../Row/Row.js";
import './container.css';
import images from '../../images.json';

class Container extends Component {
    state = {
        images: images
    }

    randomizeImages = () => {
        this.state.images.forEach(x => console.log(x))
        
        var newImages = [],
            arrLength = 12;

        while(arrLength >= 0) {
            let randomIndex = Math.floor(Math.random() * arrLength);
            newImages.push(this.state.images[randomIndex])
            this.state.images.splice(randomIndex, 1)
            arrLength--;
        }
        newImages.forEach(x => console.log(x))

        this.setState({images: newImages})
        this.state.images.forEach(x => console.log(x))

    }

    render () { 
        return (
            <div className="container">
                <Row random={this.randomizeImages} one={this.state.images[0]} two={this.state.images[1]} three={this.state.images[2]} four={this.state.images[3]}/>
                <Row random={this.randomizeImages} one={this.state.images[4]} two={this.state.images[5]} three={this.state.images[6]} four={this.state.images[7]}/>
                <Row random={this.randomizeImages} one={this.state.images[8]} two={this.state.images[9]} three={this.state.images[10]} four={this.state.images[11]}/>                         
            </div>
        )
    }
}

export default Container;