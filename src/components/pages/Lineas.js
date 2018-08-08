import React from "react";

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init();
	}
  	render() {
    	return (
			<div className="container">
				<div data-aos="fade-up">
					page 2
				</div>
			</div>
    	);
  	}
}

export default Home;