import React from "react";
import HeaderEspectaculos from "./../generals/header-espectaculos"
import SectionPrincesses from "./../generals/section-princesses"
import SectionSuper from "./../generals/section-super"
import SectionInfantiles from "./../generals/section-infantiles"
import SectionLeyenfas from "./../generals/section-leyendas"

class Espectaculos extends React.Component {
	componentDidMount(prevProps) {
		AOS.init({
			once: true,
			duration: 750,
			easing: 'ease-out-back'
		});

		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				}
			}
		})
	}
	
  	render() {
    	return (
			<div>
				<HeaderEspectaculos />
				<SectionPrincesses />
				<SectionSuper />
				<SectionInfantiles />
			</div>
    	);
  	}
}

export default Espectaculos;