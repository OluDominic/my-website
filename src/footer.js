import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer>
                By Oludare Dominic <span>
                    <FontAwesomeIcon icon={faCopyright} />
                </span>
                2020
                </footer>
            </div>
        );
    }
}

export default Footer;