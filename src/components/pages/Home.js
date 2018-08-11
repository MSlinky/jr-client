import React from "react";
import Header from "./../header";
import HeaderIndex from "./../generals/header-index";

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
				<div style={{height: '500px'}}>
					
				</div>
			</div>
    	);
  	}
}

export default Home;