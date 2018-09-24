import React from "react";
import HeaderQuienes from "./../generals/header-quienes"
import InfoQuienes from "./../generals/infoQuienes"

class QuienesSomos extends React.Component {
	componentDidMount(prevProps) {
		AOS.init({
			once: true,
			duration: 750,
			easing: 'ease-out-back'
    });
  }
	
  	render() {
    	return (
			<div>
				<HeaderQuienes />
				<InfoQuienes />
			</div>
    	);
  	}
}

export default QuienesSomos;