import React, { Component } from "react";
import SocketsService from "../../services/socketsService";
import TmpHum from "../tmpHum/TmpHum";
import spinner from "../../assets/img/spinner.gif";

// const ENDPOINT = "http://localhost:3000/1";
const ENDPOINT = "https://api.iflan.house/1";

class Header extends Component {

  constructor( props ) {
	super(props);

	this.get_stats_url = ENDPOINT + "/stats";
	SocketsService.listenForNewWindLogs(this);

	this.state = {
	  error: null,
	  isLoaded: false,
	  stats: []
	};
  }

  componentDidMount = () => {
	fetch(this.get_stats_url)
	  .then(res => res.json())
	  .then(
		( results ) => {
		  console.log(results.response.tmp_hum);
		  this.setState({
			isLoaded: true,
			tmp_hum: results.response.tmp_hum,
			noise: results.response.noise,
		  });
		},
		( error ) => {
		  this.setState({
			isLoaded: true,
			error
		  });
		}
	  )
  }


  renderLatestStatsView = () => {
	if (this.state.stats)
	  return this.displayStats();
	else
	  return this.displayPlaceholder();
  }

  render() {
	const { error, isLoaded } = this.state;
	if (error) {
	  return <div>Error: { error.message }</div>;
	} else if (!isLoaded) {
	  return <div className="spinner-container"><img src={ spinner } alt="iflan"/></div>;
	} else {
	  return this.renderLatestStatsView()
	}
  }


  displayStats = () => {
	return (
	  <div>

		<div className="stats-container">
		  <section className="stats-slider-container ">
			<div className="stats-slider">
			  <TmpHum props={this.state.tmp_hum.last} />
			</div>
		  </section>
		</div>
	  </div>
	)
  }

}


export default Header;
