import React, { Component } from "react";
import Row from "../Row/Row.js";
import './container.css';
import images from '../../images.json';

class Container extends Component {
    state = {
        images: images,
        clickedImages: [],
        score: 0,
        topScore: 0
    }

    addClicked = (id) => {
        let clicked = this.state.clickedImages
        if(clicked.indexOf(id) === -1) {
            clicked.push(id)
            let newScore = this.state.score + 1;
            this.setState({score: newScore})

            if(this.state.score === 11) {
                alert("WINNER!")
                this.setState({score: 0, clickedImages: []})
                if(this.state.topScore !== 12)
                    this.setState({topScore: 12})
            } 
        }
        else {
            if(this.state.score > this.state.topScore)
                this.setState({topScore: this.state.score})
            this.setState({score: 0, clickedImages: []})
        }
        console.log(clicked)
    }

    randomizeImages = (e) => {
        this.addClicked(e.target.id)

        var newImages = [],
            arrLength = 12;

        while(arrLength >= 0) {
            let randomIndex = Math.floor(Math.random() * arrLength);
            newImages.push(this.state.images[randomIndex])
            this.state.images.splice(randomIndex, 1)
            arrLength--;
        }
        this.setState({images: newImages})
        this.state.images.forEach(x => console.log(x))
    }

    render () { 
        return (
            <div className="container">
                <h3>Score: {this.state.score} | Top Score: {this.state.topScore}</h3>
                <Row random={this.randomizeImages} one={this.state.images[0]} two={this.state.images[1]} three={this.state.images[2]} four={this.state.images[3]}/>
                <Row random={this.randomizeImages} one={this.state.images[4]} two={this.state.images[5]} three={this.state.images[6]} four={this.state.images[7]}/>
                <Row random={this.randomizeImages} one={this.state.images[8]} two={this.state.images[9]} three={this.state.images[10]} four={this.state.images[11]}/>                         
            </div>
        )
    }
}

export default Container;