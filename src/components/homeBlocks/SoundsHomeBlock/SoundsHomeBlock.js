import React, { Component } from "react";
import '../HomeBlocks.scss';
import SocketsService from "../../../services/socketsService";
import { STATS_URL } from "../../../config/urls";
import Spinner from "../../Spinner/Spinner";
import { ParseDatetime } from "../../../helpers/ParseDatetime";
import { Link } from "react-router-dom";

class SoundsHomeBlock extends Component {

  constructor( props ) {
	super(props);

	SocketsService.listenForStatsLogs(this);

	this.state = {
	  isLoaded: false,
	  datetime: null,
	  avg_per_day: null,
	};
  }


  setSoundsHomeBlockState = ( stats_response ) => {
	let noise = stats_response.noise;
	this.setState({
	  isLoaded: true,
	  datetime: noise.last.created_at,
	  avg_per_day: noise.avg_per_day
	});
  };

  socketsCallback = ( data ) => this.setSoundsHomeBlockState(data.response);

  componentDidMount = () => {
	fetch(STATS_URL)
	  .then(res => res.json())
	  .then(
		( results ) => this.setSoundsHomeBlockState(results.response),
		( error ) => this.setState({ isLoaded: true, error })
	  );
  };

  render() {
	const { isLoaded } = this.state;
	if (!isLoaded) return <Spinner/>;
	return (
	  <Link to="/sound">
		<div className="home-block">
		  <div className="icon">
			<i className="far fa-sad-cry"></i>
		  </div>
		  <h2>Llantos</h2>
		  <div>
			Promedio ultima semana:
			<span> { this.state.avg_per_day }</span>
		  </div>
		  <div>
			Último registro:
			<span> { ParseDatetime(this.state.datetime) }</span>
		  </div>
		</div>
	  </Link>
	);
  }
}


export default SoundsHomeBlock;
