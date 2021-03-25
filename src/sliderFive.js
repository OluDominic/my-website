import React, {useState} from 'react'
import './slider.css'
import Image from './image'
import i2 from './Pics/Buttery/2.png';
import i3 from './Pics/Buttery/3.png';
import i4 from './Pics/Buttery/4.png';
import i5 from './Pics/Buttery/5.png';
import i6 from './Pics/Buttery/6.png';
import i7 from './Pics/Buttery/7.png';
import i8 from './Pics/Buttery/8.png';
import i9 from './Pics/Buttery/9.png';
import i10 from './Pics/Buttery/10.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';



function useSlider() {

    let sliderArr = [ 
    <Image src={i2} />,
    <Image src={i3} />,
    <Image src={i4} />,
    <Image src={i5} />,
    <Image src={i6} />,
    <Image src={i7} />,
    <Image src={i8} />,
    <Image src={i9} />,
    <Image src={i10} />,
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