import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

class MapContainer extends React.Component {
    constructor(props) {
        super (props);
        this.state = {}
    }
    
    render(){
        const mapStyles = {
            width: '430px',
            height: '300px',
            color: 'cyan',
            Right: '0px'
        }
        return(
            <div>
                <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{ lat: 6.524379, lng: 3.379206}} 
                style={mapStyles}
                />
                <Marker position={{ lat: 7.00, lng: 4.00}} />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA4zPNJKzenuRiKTiI0QuiGmCG4nQkbzDI'
})(MapContainer);