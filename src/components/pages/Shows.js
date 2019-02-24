import React from "react";
import HeaderShows from "../generals/header-shows"
import ContentShows from "../generals/contentShows"

class Shows extends React.Component {
	componentDidMount(prevProps) {
		AOS.init({
			once: true,
			duration: 750,
			easing: 'ease-out-back'
		});
	}
	
  	render() {
    	return (
			<div className="page-shows">
				<HeaderShows />
				<ContentShows />
			</div>
    	);
  	}
}

export default Shows;