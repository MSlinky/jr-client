import React from "react";
import Grid from '@material-ui/core/Grid';

class Contact extends React.Component {
    onMapCreated(map) {
      map.setOptions({
        disableDefaultUI: true
      });
    }

  	render() {
    	return (
        <div className="container">
          <div>
            <Grid container className="info-quienes">
              <Grid className="hide-mobile" item md={1}>
                <img src="/public/img/elementos/honguitos1.png" alt=""/>
              </Grid>
              <Grid item md={5}>
              <div className="title-data primary-text" data-aos="fade-up">
                <p className="text-center">
                  ¿Quiénes somos?
                </p>
              </div>
              <div>
                <p className="p-main">
                  Somos una empresa de gente joven, con el sueño de convertir las artes escénicas en una forma de vida haciendo crecer a todos los que forman esta gran familia.
                </p>
              </div>
              </Grid>
              <Grid item md={5} className="text-center">
                <img src="/public/img/elementos/foto_1.png" alt=""/>
              </Grid>
              <Grid item md={1} className="hide-mobile text-right">
                <img src="/public/img/elementos/honguitos1.png" alt=""/>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container className="info-quienes">
              <Grid item md={6} className="text-center hide-mobile">
                <img src="/public/img/elementos/foto_2.png" alt=""/>
              </Grid>
              <Grid item md={6}>
                <div className="title-data primary-text" data-aos="fade-up">
                  <p className="text-center">
                    Misión
                  </p>
                </div>
                <p className="p-main">
                  Inculcar a los niños y adultos la cultura el teatro musical y las artes escénicas, llevando los mejores montajes hasta su evento, cuidando siempre la calidad y el profecionalismo de todo el equipo.
                </p>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container className="info-quienes">
              <Grid item md={6}>
                <div className="title-data primary-text" data-aos="fade-up">
                  <p className="text-center">
                    Visión
                  </p>
                </div>
                <p className="p-main">
                  Llegar a hacer la casa productora de artes escénicas referente de occidente, brindando más y mejores oportunidades al talento local.
                </p>
              </Grid>
              <Grid item md={6} className="text-center">
                <img src="/public/img/elementos/foto_3.png" alt=""/>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container className="info-valores">
              <Grid item md={12}>
                <div className="title-data primary-text" data-aos="fade-up">
                  <p>
                    Valores
                  </p>
                </div>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores1.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Profesionalismo
                </p>
                <p data-aos="zoom-in" className="text-values">
                  En cada entrega, proceso y contratación de nuestros servicios y al interior de la empresa con todo el equipo que conforma la estructura de la misma.
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores2.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Responsabilidad
                </p>
                <p data-aos="zoom-in" className="text-values">
                  Con cada uno de los miembros de la empresa y nuestros clientes/espectadores, así como con la sociedad y medio ambiente.
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores3.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Puntualidad
                </p>
                <p data-aos="zoom-in" className="text-values">
                  En todad nuestras contrataciones e internamente, logrando así un despempeño más eficiente y productivo en cada proceso.
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores4.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Confianza
                </p>
                <p data-aos="zoom-in" className="text-values">
                  
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores5.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Pasión
                </p>
                <p data-aos="zoom-in" className="text-values">
                  
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores6.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Comunicación clara y honesta
                </p>
                <p data-aos="zoom-in" className="text-values">
                  
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores7.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Innovación
                </p>
                <p data-aos="zoom-in" className="text-values">
                  
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores8.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Integridad laboral
                </p>
                <p data-aos="zoom-in" className="text-values">
                  
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores9.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Constancia y disciplina
                </p>
                <p data-aos="zoom-in" className="text-values">
                  
                </p>
              </Grid>
              <Grid item md={3} xs={12} className="text-center">
                <img data-aos="zoom-in" src="/public/img/elementos/valores10.png" alt=""/>
              </Grid>
              <Grid item md={9} xs={12}>
                <p className="title-values">
                  Comapañerismo y trabajo en equipo 
                </p>
                <p data-aos="zoom-in" className="text-values">
                  
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
    	);
  	}
}

export default Contact;