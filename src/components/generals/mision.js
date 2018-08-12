import React from "react";
import Hidden from '@material-ui/core/Hidden';

class QuienesSomos extends React.Component {
	componentDidMount(prevProps) {
        
	}
  	render() {
    	return (
			<div className="mision">
                <Hidden smUp>
                    <div className="title primary-text">
                        Misión
                    </div>
                </Hidden>
                <div className="info">
                    <p data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1000" className="primary-text">
                        Satisfacer las necesidades, deseos y expectativas de entretenimiento en la ZMG, 
                        proporcionando a los espectadores la más alta calidad con una propuesta diferente.
                    </p>
                </div>
                <Hidden xsDown>
                    <div className="title">
                        Misión
                    </div>
                </Hidden>
			</div>
    	);
  	}
}

export default QuienesSomos;