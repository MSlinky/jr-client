import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div data-aos="zoom-in">
        <Map
          google = { this.props.google }
          zoom = { this.props.zoom }
          initialCenter = { this.props.coords }
          className="mapContact"
        >
          <Marker
            position = {this.props.mark}
            icon = {'/public/img/iconos/placeholder.png'}
          />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDcVch6GrCP_sjvdI9WdBC62jTOq3jxQQI'
})(GoogleMapsContainer)