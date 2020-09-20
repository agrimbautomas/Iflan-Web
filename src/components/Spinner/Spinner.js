import React from "react";
import './Spinner.scss';
import spinner from "../../assets/img/spinner.gif";

const Spinner = () => (
  <div className="spinner-container">
	<img src={ spinner } alt="iflan"/>
  </div>
)

export default Spinner;
