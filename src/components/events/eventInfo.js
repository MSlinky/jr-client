import React from "react";
import SliderGallery from "./../generals/slider-gallery";

class EventInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInfo: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState((state) => ({
			showInfo: nextProps.showInfo
    }));
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const gallery = [];
    let pair = [];
    this.state.showInfo.forEach((item, idx) => {
      if ( (idx+1) % 2 === 0 ){
        pair.push(item.imagesSrc);
        gallery.push(pair);
        pair = [];
      } else {
        pair.push(item.imagesSrc);
      }
    });
          
    return (
      <div className="">
        { this.state.showInfo[0] ?
          <div className="container mb-2">
            <h1> {this.state.showInfo[0].showName} </h1>
            <div className="mb-2">
              <p className="primary-text" style={{fontSize: '1.5em'}}>
                {this.state.showInfo[0].showDescription}
              </p>
            </div>
            <SliderGallery gallery={gallery} name="leyendas" tema="yellow"/>
          </div>
          : null
        }
      </div>
    );
  }
}

export default EventInfo;