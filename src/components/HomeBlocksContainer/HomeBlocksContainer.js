import React from "react";
import './HomeBlocksContainer.scss';
import SoundsHomeBlock from "../homeBlocks/SoundsHomeBlock/SoundsHomeBlock";
import HumidityHomeBlock from "../homeBlocks/HumdityHomeBlock/HumidityHomeBlock";
import TemperatureHomeBlock from "../homeBlocks/TemperatureHomeBlock/TemperatureHomeBlock";
import BabyCallHomeBlock from "../homeBlocks/BabyCallHomeBlock/BabyCallHomeBlock";
import BabyCall from "../BabyCall/BabyCall";
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";

const HomeBlocksContainer = () => (
  <div className="home-blocks-container">
	<div className="grid">
	  <Router>
		<BabyCallHomeBlock/>
		<SoundsHomeBlock/>
		<TemperatureHomeBlock/>
		<HumidityHomeBlock/>

		<Switch>
		  <Route path="/baby">
			<BabyCall/>
		  </Route>
		  <Route path="/sound">
			<SoundsHomeBlock/>
		  </Route>
		  <Route path="/tmp">
			<TemperatureHomeBlock/>
		  </Route>
		</Switch>
	  </Router>

	</div>
  </div>
);

export default HomeBlocksContainer;
