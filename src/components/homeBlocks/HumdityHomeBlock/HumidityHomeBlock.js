import React, { Component } from "react";
import '../HomeBlocks.scss';
import SocketsService from "../../../services/socketsService";
import { STATS_URL } from "../../../config/urls";
import Spinner from "../../Spinner/Spinner";
import { ParseDatetime } from "../../../helpers/ParseDatetime";

class HumidityHomeBlock extends Component {

  constructor( props ) {
	super(props);

	SocketsService.listenForStatsLogs(this);

	this.state = {
	  temperature: null,
	  datetime: null,
	  humidity: null,
	};
  }


  setHumidityHomeBlockState = ( stats_response ) => {
	let noise = stats_response.noise;
	this.setState({
	  isLoaded: true,
	  datetime: noise.last.created_at,
	  avg_per_day: noise.avg_per_day
	});
  };

  socketsCallback = ( data ) => this.setHumidityHomeBlockState(data.response);

  componentDidMount = () => {
	fetch(STATS_URL)
	  .then(res => res.json())
	  .then(
		( results ) => this.setHumidityHomeBlockState(results.response),
		( error ) => this.setState({ isLoaded: true, error })
	  );
  };

  render() {
	const { isLoaded } = this.state;
	if (!isLoaded) return <Spinner/>;
	return (
	  <div className="home-block">
		<div className="icon">
		  <i className="far fa-sad-cry"></i>
		</div>
		<h2>Llantos</h2>
		<div>
		  Ultimo registro:
		  <span> { ParseDatetime(this.state.datetime) }</span>
		</div>
		<div>
		  Promedio por día:
		  <span> { this.state.avg_per_day }</span>
		</div>
	  </div>
	);
  }
}


export default HumidityHomeBlock;
