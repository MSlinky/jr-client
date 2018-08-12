import React from "react";
import Grid from '@material-ui/core/Grid';

class Footer extends React.Component {
  	render() {
    	return (
    		<div>
    			<footer className="page-footer">
							<Grid container className="container" justify="center">
									<Grid item xs={3} md={3} className="logo-footer">
											<img src="/public/img/logos/logo_JR.png" alt=""/>
									</Grid>
									<Grid item xs={12} md={3}>
											<div className="title">
												Dirección
											</div>
											<div className="info direccion">
												Av. Lapizlazuli 2726. <br/>
												Residencial Victoria <br/>
												Guadalajara (México) <br/>
											</div>
									</Grid>
									<Grid item xs={12} md={3} className="container-info">
											<div className="title">
												Télefono
											</div>
											<div className="info telefono">
												<a href="tel:3322381608">
													33 2238 1608
												</a>
											</div>
									</Grid>
									<Grid item xs={12} md={3} className="container-info">
											<div className="title">
												Correo
											</div>
											<div className="info correo">
												<a href="mailto:jr.alejandra.ch@gmail.com">
													jr.alejandra.ch@gmail.com
												</a>
											</div>
									</Grid>
							</Grid>
		        </footer>
    		</div>
    	);
  	}
}

export default Footer;