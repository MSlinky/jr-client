import React from "react";
import Grid from '@material-ui/core/Grid';

class QuienesSomos extends React.Component {
	componentDidMount(prevProps) {
        
	}
  	render() {
    	return (
			<div className="quienes-somos">
                <Grid container>
                    <Grid item xs={12} md={6} className="title">
                        <img data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000" src="/public/img/elementos/titulo_quienes-somos.png" />
                    </Grid>
                    <Grid item xs={12} md={6} className="info primary-text">
                        <div className="dulces-img">
                            <img data-aos="flip-left" data-aos-offset="200"  data-aos-duration="1000" src="/public/img/elementos/dulces_quienes-somos.png" alt=""/>
                        </div>
                        <div className="dulces-text">
                            <p data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                                Junior Producciones, busca hacer de cada fiesta y cumpleaños un recuerdo invaluable; el recuerdo de un
                                sueño cumplido, el día que conocen a su ídolo, aquel personaje que sólo en fantasías nos visita, hecho realidad
                                en el día mas especial de los pequeños.
                            </p>
                            <div className="hongos">
                                <img data-aos="flip-left" data-aos-offset="150"  data-aos-duration="1000" src="/public/img/elementos/hongos_quienes-somos.png" alt=""/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
			</div>
    	);
  	}
}

export default QuienesSomos;