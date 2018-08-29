import React from "react";
import SliderGallery from "./slider-gallery";

class SectionPrincesses extends React.Component {
  	render() {

		let gallery = [['foto1_princesas.png', 'foto2_princesas.png'], 
						['foto3_princesas.png', 'foto4_princesas.png'], 
						['foto5_princesas.png', 'foto6_princesas']]

    	return (
			<div className="section-espectaculos">
				<div className="container container-sections-espectaculos">
					<div className="content-title-section">
						<img className="title-section" src="/public/img/elementos/letrero-princesas.png" alt=""/>
						<p className="title-section-text">Princesas</p>
					</div>

					<SliderGallery gallery={gallery} name="princesses"/>
				</div>
				<div className="arrow-bottom">
					<img src="/public/img/backgrounds/triangulo-blanco.png" alt=""/>
					<div className="image-arrow-bottom"><img src="/public/img/elementos/hongos_quienes-somos.png" alt=""/></div>
				</div>
            </div>
    	);
  	}
}

export default SectionPrincesses;