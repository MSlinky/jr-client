import React from "react";
import SliderGallery from "./slider-gallery";

class SectionPrincesses extends React.Component {
  	render() {

		let gallery = [['foto1_princesas.png', 'foto2_princesas.png'], 
						['foto3_princesas.png', 'foto4_princesas.png'], 
						['foto5_princesas.png', 'foto6_princesas']]
		
    	return (
			<div className="section-espectaculos section-super">
				<div className="container">
					<img className="title-section" src="/public/img/elementos/letrero-super-heroes.png" alt=""/>

                    <SliderGallery gallery={gallery} name="siper"/>
				</div>
            </div>
    	);
  	}
}

export default SectionPrincesses;