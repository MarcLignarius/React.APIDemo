import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const urlForArtist = artist =>
	`http://www.songsterr.com/a/ra/songs.json?pattern=${artist}`

class Songsterr extends Component {
	constructor(props) {
		super(props)
		this.state = {
			requestFailed: false
		}
	}

	componentDidMount() {
		fetch(urlForArtist(this.props.artist))
			.then(response => {
				if (!response.ok) {
					throw Error('Network request failed')
				}
				return response
			})
			.then(d => d.json())
			.then(d => {
				this.setState({
					songsterrData: d
				})
			}, () => {
				this.setState({
					requestFailed: true
				})
			})
	}

	render() {
		if (this.state.requestFailed) return <p>Failed</p>
		if (!this.state.songsterrData) return <p>Loading...</p>
		console.log(this.state.songsterrData);
		return (
			<div>
				<h1>Available tabs for {this.props.artist}</h1>
				{this.state.songsterrData.map(song =>
					<div key={song.id}>
						<Card>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{song.title}
									</Typography>
								</CardContent>

							</CardActionArea>
						</Card>
					</div>
				)}
			</div>
		)
	}
}

export default Songsterr;

