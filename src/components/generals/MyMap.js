import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const coords = {
      lat: 20.6336497,
      lng: -103.3928231
    };
    const mark = {
      lat: 20.6336411,
      lng: -103.3906344
    };
    return (
      <div data-aos="zoom-in">
        <Map
          google = { this.props.google }
          zoom = { 14 }
          initialCenter = {coords}
          className="mapContact"
        >
          <Marker
            position = {mark}
            icon = {'/public/img/iconos/placeholder.png'}
          />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBlV8EQQLavOhc8AQKeBK_7MRwXirhdto8'
})(GoogleMapsContainer)