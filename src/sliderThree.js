import React, {useState} from 'react'
import './slider.css'
import Image from './image'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import k1 from './Pics/WeatherPort/1.png';
import k2 from './Pics/WeatherPort/1.png';
import k3 from './Pics/WeatherPort/1.png';


function useSlider() {

    let sliderArr = [ 
    <Image src={k1} />, 
    <Image src={k2} />,
    <Image src={k3} />,
    ]
    const [x, setX] = useState(0)
    const butLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const butRight = () => {
        x=== -100 * (sliderArr.length-1) ? setX(0) : setX(x - 100);
    }
    return (
        <div className="slider">
            {
                sliderArr.map((item, index)=> {
                    return(
                        <div key={index} className="slide"
                        style={{transform: `translateX(${x}%)`}}
                        >
                            {item}
                        </div>
                    );
                })
            }
            <Link to="/portfolio" className="window">
                <FontAwesomeIcon icon={faWindowClose} />            
            </Link>
            <button className="but-left" onClick={butLeft}><i class="fas fa-chevron-left"></i></button>
            <button className="but-right" onClick={butRight}><i class="fas fa-chevron-right"></i></button>
        </div>
    );
}

export default useSlider