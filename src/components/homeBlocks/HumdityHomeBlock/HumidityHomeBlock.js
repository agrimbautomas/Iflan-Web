import React, { Component } from "react";
import '../HomeBlocks.scss';
import SocketsService from "../../../services/socketsService";
import { STATS_URL } from "../../../config/urls";
import Spinner from "../../Spinner/Spinner";
import { ParseDatetime } from "../../../helpers/ParseDatetime";
import { Link } from "react-router-dom";

class HumidityHomeBlock extends Component {

  constructor( props ) {
	super(props);

	SocketsService.listenForStatsLogs(this);

	this.state = {
	  isLoaded: false,
	  datetime: null,
	  humidity: null,
	};
  }


  setHumidityHomeBlockState = ( tmp_hum_response ) => {
	let tmp_hum = tmp_hum_response.tmp_hum.last;
	this.setState({
	  isLoaded: true,
	  datetime: tmp_hum.created_at,
	  humidity: tmp_hum.humidity
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
	  <Link to="/hum">
		<div className="home-block">
		  <div className="icon">
			<i className="fas fa-tint"></i>
		  </div>
		  <h2>Humedad</h2>
		  <div>
			Actual:
			<span> { this.state.humidity }%</span>
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


export default HumidityHomeBlock;
