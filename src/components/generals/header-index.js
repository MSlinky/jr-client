import React from "react";
import Parallax from 'parallax-js'
import NavMain from './nav-main';

class Home extends React.Component {
    componentDidMount(prevProps) {
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene);
      parallaxInstance.friction(0.03, 0.03);
    }

  	render() {
    	return (
			<div className="header-index">
        <div className="containerSlider">
            <header>
                <div className="menuScreen">
                  <NavMain/>
                </div>
            </header>
            <div id="scene">
                <span className="star3-1 element" data-depth="0.2">
                    <img src="/public/img/slider-main/star3.png" alt=""/>
                </span>
                <span className="star3 element" data-depth="0.1">
                    <img src="/public/img/slider-main/star3.png" alt=""/>
                </span>
                <span className="star1 element" data-depth="0.1">
                    <img src="/public/img/slider-main/star1.png" alt=""/>
                </span>
                <span className="star5 element" data-depth="0.2">
                    <img src="/public/img/slider-main/star5.png" alt=""/>
                </span>
                <span className="star2 element" data-depth="0.2">
                    <img src="/public/img/slider-main/star2.png" alt=""/>
                </span>
                <span className="nube1 element" data-depth="0.2">
                    <img src="/public/img/slider-main/nube1.png" alt=""/>
                </span>
                <span className="nube2 element" data-depth="0.1">
                    <img src="/public/img/slider-main/nube2.png" alt=""/>
                </span>
                <span className="nube4 element" data-depth="0.1">
                    <img src="/public/img/slider-main/nube4.png" alt=""/>
                </span>
                <span className="nube3 element" data-depth="0.3">
                    <img src="/public/img/slider-main/nube3.png" alt=""/>
                </span>
                <span className="oso element" data-depth="0.4">
                    <img src="/public/img/slider-main/oso.png" alt=""/>
                </span>
                <span className="moana element" data-depth="0.4">
                    <img src="/public/img/slider-main/moana.png" alt=""/>
                </span>
                <span className="woody element" data-depth="0.5">
                    <img src="/public/img/slider-main/woody-y-jessy.png" alt=""/>
                </span>
                <span className="yeiyei element" data-depth="0.6">
                    <img src="/public/img/slider-main/yei-yei.png" alt=""/>
                </span>
                <span className="fondoMorado" data-depth="0.0"></span>
            </div>
        </div>
			</div>
    	);
  	}
}

export default Home;