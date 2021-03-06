import React from "react";
import Grid from '@material-ui/core/Grid';

class Espectaculos extends React.Component {
	componentDidMount(prevProps) {
        
	}
  	render() {
    	return (
			<div className="list-espectaculos">
                <div className="title">
                    Espectaculos
                </div>
                <div>
                    <Grid container className="container" spacing={40}  justify="center">
                        <Grid item xs={6} md={3} className="img-list-espectaculos" >
                            <a href="/espectaculos">
                                <span className="resplandor"></span>
                                <img data-aos="flip-left" data-aos-offset="200"  data-aos-duration="1000" src="/public/img/elementos/boton_ninas.png" alt=""/>
                            </a>
                        </Grid>
                        <Grid item xs={6} md={3} className="img-list-espectaculos" >
                            <a href="/espectaculos">
                                <span className="resplandor"></span>
                                <img data-aos="flip-right" data-aos-offset="200"  data-aos-duration="1000" src="/public/img/elementos/boton_ninos.png" alt=""/>
                            </a>
                        </Grid>
                        <Grid item xs={6} md={3} className="img-list-espectaculos" >
                            <a href="/espectaculos">
                                <span className="resplandor"></span>
                                <img data-aos="flip-left" data-aos-offset="200"  data-aos-duration="1000" src="/public/img/elementos/boton_mixto.png" alt=""/>
                            </a>
                        </Grid>
                        <Grid item xs={6} md={3} className="img-list-espectaculos" >
                            <a href="/espectaculos">
                                <span className="resplandor"></span>
                                <img data-aos="flip-left" data-aos-offset="200"  data-aos-duration="1000" src="/public/img/elementos/boton_personalizado.png" alt=""/>
                            </a>
                        </Grid>
                    </Grid>
                </div>
			</div>
    	);
  	}
}

export default Espectaculos;