import React from "react";

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init({
			once: true
		});
	}
  	render() {
    	return (
			<div>
				Home
			</div>
    	);
  	}
}

export default Home;