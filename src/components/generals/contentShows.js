import React from "react";
import Show from "./shows";
import Grid from '@material-ui/core/Grid';	

class ContentShows extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {
		this.setState({shows: []})
	}

  componentDidMount(prevProps) {
    fetch(`https://juniorshow.com.mx/api/shows`, {
			mode :'cors', 
			method: 'GET',
			cache: 'no-cache',
			credentials: 'include',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				this.setState({shows: data.data})
			})
			.catch((err) => {
				console.log(err);
			})
  }
  render() {
    return (
    <div className="content-shows">
			<div className="container">
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
					spacing={16}
				>
					{this.state.shows.map((show, idx) => {
						return (<Show key={idx} data={show} />);
					})}
				</Grid>
			</div>
    </div>
    );
  }
}

export default ContentShows;