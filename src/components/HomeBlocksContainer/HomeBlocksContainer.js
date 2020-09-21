import React from "react";
import './HomeBlocksContainer.scss';
import SoundsHomeBlock from "../homeBlocks/SoundsHomeBlock/SoundsHomeBlock";
import HumidityHomeBlock from "../homeBlocks/HumdityHomeBlock/HumidityHomeBlock";
import TemperatureHomeBlock from "../homeBlocks/TemperatureHomeBlock/TemperatureHomeBlock";
import BabyCallHomeBlock from "../homeBlocks/BabyCallHomeBlock/BabyCallHomeBlock";
import InstallPWA from "../InstallPWA/InstallPWA";

const HomeBlocksContainer = () => (
  <div className="home-blocks-container">
	<BabyCallHomeBlock/>
	<SoundsHomeBlock/>
	<TemperatureHomeBlock/>
	<HumidityHomeBlock/>
	<InstallPWA/>
  </div>
);

export default HomeBlocksContainer;
