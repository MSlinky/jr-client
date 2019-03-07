import React from "react";

class SliderGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(prevProps) {
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				}
			}
        })
    }

  	render() {
    	return (
            <div className="owl-carousel owl-carousel owl-theme">
                {this.props.gallery.map((object, i) => {
                    return (
                        <div className="item" key={ i }>
                            <div className={"zoom-gallery " + (this.props.tema === 'yellow' ? 'yellow' : '')} data-aos="zoom-out">
                                <a href={`https://bejunior.mx/jr/public/gallery/${object[0]}`} data-fancybox={this.props.name} data-caption="Caption #1" className="zoom"><img src="/public/img/iconos/magnifier.svg" alt=""/></a>
                                <div>
                                    <img src={`https://bejunior.mx/jr/public/gallery/${object[0]}`} alt=""/>
                                </div>
                            </div>
                            <div className={"zoom-gallery " + (this.props.tema === 'yellow' ? 'yellow' : '')} data-aos="zoom-out">
                                <a href={`https://bejunior.mx/jr/public/gallery/${object[1]}`} data-fancybox={this.props.name} data-caption="Caption #1" className="zoom"><img src="/public/img/iconos/magnifier.svg" alt=""/></a>
                                <div>
                                    <img src={`https://bejunior.mx/jr/public/gallery/${object[1]}`} alt=""/>
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