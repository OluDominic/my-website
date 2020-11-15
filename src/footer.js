import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer>
                    <span>
                Dominic Oludare
                </span>&nbsp;
                <span className="copy">
                    <FontAwesomeIcon icon={faCopyright} />
                &nbsp;
                2020
                </span>
                </footer>
            </div>
        );
    }
}

export default Footer;