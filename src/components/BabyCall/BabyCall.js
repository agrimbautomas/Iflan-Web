import React, { Component } from "react";
import './BabyCall.scss';
import { Link } from "react-router-dom";

class BabyCall extends Component {

  constructor( props ) {
	super(props);
  }

  render() {
	return (
	  <div className="full-card baby-call">
		<div className="inner">
		  <div className="header">
			<h2>BabyCall</h2>
		  </div>
		  <Link to='/' className='close'>
			<i className="fas fa-times"></i>
		  </Link>
		</div>
	  </div>
	);
  }
}


export default BabyCall;
