import React from 'react';
import Header from "./components/Header/Header";
import HomeBlocksContainer from "./components/HomeBlocksContainer/HomeBlocksContainer";
import InstallButton from "./components/InstallButton/InstallButton";
import SoundsHomeBlock from "./components/homeBlocks/SoundsHomeBlock/SoundsHomeBlock";
import TemperatureHomeBlock from "./components/homeBlocks/TemperatureHomeBlock/TemperatureHomeBlock";
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";
import BabyCall from "./components/BabyCall/BabyCall";

const App = () => (
  <>
	<Header/>
	<Router>
	  <HomeBlocksContainer/>
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
	<InstallButton/>
  </>

);

export default App;

