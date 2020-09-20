import React, { Component } from "react";
import '../HomeBlocks.scss';
import SocketsService from "../../../services/socketsService";
import { STATS_URL } from "../../../config/urls";
import Spinner from "../../Spinner/Spinner";
import { ParseDatetime } from "../../../helpers/ParseDatetime";

class BabyCallHomeBlock extends Component {

  constructor( props ) {
	super(props);

	SocketsService.listenForStatsLogs(this);

	this.state = {
	  isLoaded: false,
	  datetime: null,
	  humidity: null,
	};
  }


  setBabyCallHomeBlockState = ( tmp_hum_response ) => {
	let tmp_hum = tmp_hum_response.tmp_hum.last;
	this.setState({
	  isLoaded: true,
	  datetime: tmp_hum.created_at,
	  temperature: tmp_hum.temperature
	});
  };

  socketsCallback = ( data ) => this.setBabyCallHomeBlockState(data.response);

  componentDidMount = () => {
	fetch(STATS_URL)
	  .then(res => res.json())
	  .then(
		( results ) => this.setBabyCallHomeBlockState(results.response),
		( error ) => this.setState({ isLoaded: true, error })
	  );
  };

  render() {
	const { isLoaded } = this.state;
	if (!isLoaded) return <Spinner/>;
	return (
	  <div className="home-block">
		<div className="icon">
		  <i className="fas fa-camera-retro"></i>
		</div>
		<h2>BabyCall</h2>
		<div>
		  Disponible solo para red local
		</div>
	  </div>
	);
  }
}


export default BabyCallHomeBlock;
