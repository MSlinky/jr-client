import React from "react";

class SliderGallery extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.tema);
    }

  	render() {
    	return (
            <div className="owl-carousel owl-carousel owl-theme">
                {this.props.gallery.map((object, i) => {
                    return (
                        <div className="item" key={ i }>
                            <div className={"zoom-gallery " + (this.props.tema === 'yellow' ? 'yellow' : '') + " animated infinite swing delay-1s slow "} data-aos="zoom-out">
                                <a href={`/public/img/gallery/big/${object[0]}`} data-fancybox={this.props.name} data-caption="Caption #1" className="zoom"><img src="/public/img/iconos/magnifier.svg" alt=""/></a>
                                <div>
                                    <img src={`/public/img/gallery/${object[0]}`} alt=""/>
                                </div>
                            </div>
                            <div className={"zoom-gallery " + (this.props.tema === 'yellow' ? 'yellow' : '') + " animated infinite swing delay-1s slow "} data-aos="zoom-out">
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