import React from "react";
import NavMain from './nav-main';
import NavBar from './navBar';

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init();
	}
  	render() {
    	return (
			<div className="header-espectaculos">
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
                        <div className="title-espectaculos">
                            <div className="mejores">Los mejores</div>
                            <div className="espectaculos">Espectáculos</div>
                        </div>
                    </div>
                </div>
			</div>
    	);
  	}
}

export default Home;