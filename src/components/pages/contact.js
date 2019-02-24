import React from "react";
import HeaderContacto from "./../generals/header-contacto"
import InfoContact from "./../generals/infoContact"

class Espectaculos extends React.Component {
	componentDidMount(prevProps) {
		AOS.init({
			once: true,
			duration: 750,
			easing: 'ease-out-back'
    });
  }
	
  	render() {
    	return (
			<div className="page-contact">
				<HeaderContacto />
				<InfoContact />
			</div>
    	);
  	}
}

export default Espectaculos;