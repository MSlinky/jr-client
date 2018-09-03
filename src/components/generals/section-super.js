import React from "react";
import SliderGallery from "./slider-gallery";

class SectionPrincesses extends React.Component {
  	render() {

			let gallery = [['foto1_super-heroes.png', 'foto2_super-heroes.png'], 
							['foto3_super-heroes.png', 'foto4_super-heroes.png'], 
							['foto5_super-heroes.png', 'foto6_super-heroes.png']]
			
				return (
				<div className="section-espectaculos section-super">
					<div className="container">
						<img className="title-section" data-aos="zoom-in" src="/public/img/elementos/letrero-super-heroes.png" alt=""/>

						<SliderGallery gallery={gallery} name="super" tema="yellow"/>
					</div>
				</div>
    	);
  	}
}

export default SectionPrincesses;