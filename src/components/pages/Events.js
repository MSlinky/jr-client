import React from "react";
import HeaderShows from "../generals/header-shows"
import EventInfo from "../events/eventInfo"

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: []
    }
  }

  componentWillMount() {
    this.getAllInfoShow();
  }

	componentDidMount(prevProps) {
		AOS.init();
  }

  getAllInfoShow() {
		fetch(`https://bejunior.mx/api/showInfo/${this.props.match.params.id}`, {
			mode :'cors', 
			method: 'GET',
			cache: 'no-cache',
			// credentials: 'include',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
        if (data.data) {
          this.setState({
            showInfo: data.data
          });
        }
			})
			.catch((err) => {
				console.log(err);
			})
	}
  
  render() {
    return (
    <div className="Events">
      <HeaderShows />
      <EventInfo showInfo={this.state.showInfo} />
    </div>
    );
  }
}

export default Events;