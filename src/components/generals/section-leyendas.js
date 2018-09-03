import React from "react";
import SliderGallery from "./slider-gallery";

class SectionPrincesses extends React.Component {
  	render() {
			let gallery = [['foto1_leyendas.png', 'foto2_leyendas.png'], 
						['foto3_leyendas.png', 'foto4_leyendas.png'], 
						['foto5_leyendas.png', 'foto6_leyendas.png']]

    	return (
				<div className="section-espectaculos section-leyendas">
					<div className="container">
						<img className="title-section" data-aos="zoom-in" src="/public/img/elementos/letrero-leyendas.png" alt=""/>

						<SliderGallery gallery={gallery} name="leyendas" tema="yellow"/>
					</div>
				</div>
    	);
  	}
}

export default SectionPrincesses;