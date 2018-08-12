import React from "react";
import Header from "./../header";
import HeaderIndex from "./../generals/header-index";
import QuienesSomos from "./../generals/quienesSomos";

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init({
			once: true
		});
	}
  	render() {
    	return (
			<div>
				<HeaderIndex />
				<Header />
				<QuienesSomos />
			</div>
    	);
  	}
}

export default Home;