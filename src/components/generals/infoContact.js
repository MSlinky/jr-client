import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import MyMap from './MyMap';



class Contact extends React.Component {
    onMapCreated(map) {
      map.setOptions({
        disableDefaultUI: true
      });
    }

  	render() {
    	return (
        <div className="container">
          <div className="title-data primary-text" data-aos="fade-up">
            <p>
              Nuestros datos
            </p>
          </div>
          <div>
            <Grid container className="info-contact">
              <Grid item xs={12} sm={5}>
                <p className="primary-text" data-aos="fade-up">
                  Isla Salomón #2456 <br/>
                  Col. Jardines del Sur. C.P. 44950 <br/>
                  Guadalajara (México)
                </p>
              </Grid>
              <Grid item xs={12} sm={5}>
                <div className="primary-font primary-text" data-aos="fade-up">
                  <div className="icon-phone">
                    38 01 58 19 <br/>
                    33 22 38 16 08
                  </div>
                  <div className="icon-email">
                    ventasjrproducciones@gmail.com
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} className="text-right">
                <img className="icon-location" data-aos="flip-left" src="/public/img/iconos/place.svg" alt=""/>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container className="info-contact">
              <Grid item xs={12} sm={6}>
                <div className="primary-text" data-aos="fade-up">
                  <div className="title-form">Datos de contacto</div>
                  <form action="">
                    <TextField
                      id="name"
                      label="Nombre"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="email"
                      label="Correo"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                      id="phone"
                      label="Teléfono"
                      margin="normal"
                      fullWidth
                    />
                    <TextField
                        id="comment"
                        label="Comentario"
                        multiline
                        margin="normal"
                        fullWidth
                      />
                      <Button variant="contained" color="primary">
                        Enviar mensaje
                      </Button>
                  </form>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <MyMap coords={ {lat: 20.6336497, lng: -103.3928231} } mark={ {lat: 20.6336411, lng: -103.3906344} } zoom={14}/>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
    	);
  	}
}

export default Contact;