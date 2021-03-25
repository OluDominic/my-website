import React, {useState} from 'react'
import './slider.css'
import Image from './image'
import i1 from './Pics/Salary/1.png';
import i19 from './Pics/Salary/19.png';
import i3 from './Pics/Salary/3.png';
import i4 from './Pics/Salary/4.png';
import i5 from './Pics/Salary/5.png';
import i6 from './Pics/Salary/6.png';
import i7 from './Pics/Salary/7.png';
import i8 from './Pics/Salary/8.png';
import i9 from './Pics/Salary/9.png';
import i10 from './Pics/Salary/10.png';
import i11 from './Pics/Salary/11.png';
import i12 from './Pics/Salary/12.png';
import i13 from './Pics/Salary/13.png';
import i14 from './Pics/Salary/14.png';
import i15 from './Pics/Salary/15.png';
import i16 from './Pics/Salary/16.png';
import i17 from './Pics/Salary/17.png';
import i18 from './Pics/Salary/18.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';



function useSlider() {

    let sliderArr = [ 
    <Image src={i19} />,
    <Image src={i1} />, 
    <Image src={i3} />,
    <Image src={i4} />,
    <Image src={i5} />,
    <Image src={i6} />,
    <Image src={i7} />,
    <Image src={i8} />,
    <Image src={i9} />,
    <Image src={i10} />,
    <Image src={i11} />,
    <Image src={i12} />,
    <Image src={i13} />,
    <Image src={i14} />,
    <Image src={i15} />,
    <Image src={i16} />,
    <Image src={i17} />,
    <Image src={i18} />,
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