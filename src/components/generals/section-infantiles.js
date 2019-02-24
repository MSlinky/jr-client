import React from "react";
import SliderGallery from "./slider-gallery";

class SectionPrincesses extends React.Component {
  	render() {
		
		let gallery = [['foto1_infantiles.png', 'foto2_infantiles.png'], 
						['foto3_infantiles.png', 'foto4_infantiles.png'], 
						['foto5_infantiles.png', 'foto6_infantiles.png']]

    	return (
			<div className="section-espectaculos section-infantiles">
				<div className="container">
					<div className="content-title-section" data-aos="zoom-in" >
						<img className="title-section" src="/public/img/elementos/letrero-infantiles.png" alt=""/>
						<p className="title-section-text infantiles">Infantiles</p>
					</div>

					<SliderGallery gallery={gallery} name="infantiles"/>
				</div>
      </div>
    	);
  	}
}

export default SectionPrincesses;