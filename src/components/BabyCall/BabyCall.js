import React, { Component } from "react";
import './BabyCall.scss';
import { Link } from "react-router-dom";
import { RASPI1_IP, RASPI2_IP } from "../../config/urls";

class BabyCall extends Component {

  render() {
	return (
	  <div className="full-card baby-call">
		<div className="inner">
		  <div className="header">
			<h2>BabyCall</h2>
		  </div>
		  <audio controls autoPlay={true}>
			<source src={ "http://" + RASPI1_IP + ":8888/audio.mp3" } type="audio/mp3"/>
		  </audio>
		  <h3>Cuna</h3>
		  <img src={ "http://" + RASPI1_IP + "/video" }/>
		  <h3>Cuarto</h3>
		  <img src={ "http://" + RASPI2_IP + "/video" }/>
		  <Link to='/' className='close'>
			<i className="fas fa-times"></i>
		  </Link>
		</div>
	  </div>
	);
  }
}


export default BabyCall;
