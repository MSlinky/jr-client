import React from "react";
import NavMain from './nav-main';

class Home extends React.Component {
	componentDidMount(prevProps) {
		AOS.init();
	}
  	render() {
    	return (
			<div className="header-espectaculos">
                <div className="containerSlider">
                    <header>
                        <div className="menuScreen">
                            <NavMain/>
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