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
		this.setState({shows: [{"id":8,"created_at":"2018-11-03 23:31:37","updated_at":"2018-11-05 05:00:07","nombre_show":"Prueba","descripcion_show":"prueba de un evento","imagen_show":"1541394007.png","fecha_show":"0001-01-01 00:00:00","lugar_show":"(20.72735816632004, -103.36803674697876)"}]})
    /*fetch(`https://juniorshow.com.mx/api/shows`, {
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
			})*/
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