import React from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MyMap from './MyMap';

class Show extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(this.props)
    this.coordenadas = this.props.data.lugar_show.replace('(','').replace(')','').split(', ');
  }

  render() {

    var imgStyle = {
      backgroundImage: `url(https://juniorshow.com.mx/jr/public/imgShows/${this.props.data.imagen_show})`
    };

    return (
      <Grid item xs={12}>
        <Card className="card-shows">
          <CardContent>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="title">
                  {this.props.data.nombre_show}
                </div>
                <div className="sub-title">
                  {this.props.data.descripcion_show}
                </div>
                <div className="date">
                  <span className="label-date-show">Fecha:</span> {new Date(this.props.data.fecha_show).toLocaleString('en-US', { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}
                </div>
                <div className="img-show" style={imgStyle}>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className="map-show">
                <MyMap coords={ {lat: 20.67450772964682, lng: -103.3465576171875} } mark={ {lat: this.coordenadas[0], lng: this.coordenadas[1]} } zoom={12}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default Show;