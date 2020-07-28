import React from 'react';
import './portfolio.css'
import Pic1 from './abstract-art-black-background-blur-1040499 (1) (1).jpg'
import ImageGallery from 'react-image-gallery';

const Images = [
    {
        original: './Screenshot (28).png',
        title: 'Homepage',
        thumbnail: './Screenshot (28).png'
    },
    {
        original: 'Screenshot (29).png',
        title: 'Login Page',
        thumbnail: 'Screenshot (28).png'
    },
    {
        original: 'Screenshot (20).png',
        title: 'Registration Page',
        thumbnail: 'Screenshot (28).png'
    }
]


class Portfolio extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="portfolio">
                <h1>Portfolio</h1>
                <div className="pic-whole">
                    <ImageGallery items={Images} />;
                </div>
            </div>
        );
    }
}

export default Portfolio;