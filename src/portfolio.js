import React from 'react';
import './portfolio.css'
import Pic1 from './abstract-art-black-background-blur-1040499 (1) (1).jpg'


class Portfolio extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <div className="pic-whole">
                    <img className="image1" src={Pic1} alt={Pic1} />
                    <div className="pic-slide">
                        <div className="pic-text">Siwes Project</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;