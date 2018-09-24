import React from "react";
import NavMain from './nav-main';
import NavBar from './navBar';

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init();
	}
  	render() {
    	return (
			<div className="header-quienes">
        <div className="containerSlider" data-aos="fade-up">
            <header>
                <div className="menuScreen">
                    <div className="desktop">
                        <NavMain/>
                    </div>
                    <div className="mobile">
                        <NavBar />
                    </div>
                </div>
            </header>
            <div>
                <div className="title-contacto">
                    <div className="mejores">Quiénes somos</div>
                </div>
            </div>
        </div>
			</div>
    	);
  	}
}

export default Home;