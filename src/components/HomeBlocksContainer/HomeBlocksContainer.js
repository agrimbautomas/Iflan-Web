import React from "react";
import './HomeBlocksContainer.scss';
import SoundsHomeBlock from "../homeBlocks/SoundsHomeBlock/SoundsHomeBlock";
import HumidityHomeBlock from "../homeBlocks/HumdityHomeBlock/HumidityHomeBlock";
import TemperatureHomeBlock from "../homeBlocks/TemperatureHomeBlock/TemperatureHomeBlock";
import BabyCallHomeBlock from "../homeBlocks/BabyCallHomeBlock/BabyCallHomeBlock";
import {
  BrowserRouter as Router, Switch,
  Route,
  Link
} from "react-router-dom";


const HomeBlocksContainer = () => (
  <div className="home-blocks-container">
	<div className="grid">
	  <Router>
		<Link to="/call">
		  <BabyCallHomeBlock/>
		</Link>
		<Link to="/about">
		  <SoundsHomeBlock/>
		</Link>
		<Link to="/users">
		  <TemperatureHomeBlock/>
		</Link>
		<Link to="/users">
		  <HumidityHomeBlock/>
		</Link>


		{/*<Switch>*/}
		{/*  <Route path="/about">*/}
		{/*	<BabyCallHomeBlock/>*/}
		{/*  </Route>*/}
		{/*  <Route path="/users">*/}
		{/*	<SoundsHomeBlock/>*/}
		{/*  </Route>*/}
		{/*  <Route path="/call">*/}
		{/*	<TemperatureHomeBlock/>*/}
		{/*  </Route>*/}
		{/*</Switch>*/}
	  </Router>
	</div>
  </div>
);

export default HomeBlocksContainer;
