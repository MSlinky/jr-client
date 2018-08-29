import React from "react";

class SliderGallery extends React.Component {
    constructor(props) {
        super(props);
    }

  	render() {
    	return (
            <div className="owl-carousel owl-carousel owl-theme">
                {this.props.gallery.map((object, i) => {
                    return (
                        <div className="item" key={ i }>
                            <div className="zoom-gallery">
                                <a href={`/public/img/gallery/big/${object[0]}`} data-fancybox={this.props.name} data-caption="Caption #1" className="zoom"><img src="/public/img/iconos/magnifier.svg" alt=""/></a>
                                <div>
                                    <img src={`/public/img/gallery/${object[0]}`} alt=""/>
                                </div>
                            </div>
                            <div className="zoom-gallery">
                                <a href={`/public/img/gallery/big/${object[1]}`} data-fancybox={this.props.name} data-caption="Caption #1" className="zoom"><img src="/public/img/iconos/magnifier.svg" alt=""/></a>
                                <div>
                                    <img src={`/public/img/gallery/${object[1]}`} alt=""/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    	);
  	}
}

export default SliderGallery;