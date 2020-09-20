import React from "react";
import './HomeBlocksContainer.scss';
import SoundsHomeBlock from "../homeBlocks/SoundsHomeBlock/SoundsHomeBlock";
import HumidityHomeBlock from "../homeBlocks/HumdityHomeBlock/HumidityHomeBlock";
import TemperatureHomeBlock from "../homeBlocks/TemperatureHomeBlock/TemperatureHomeBlock";
import BabyCallHomeBlock from "../homeBlocks/BabyCallHomeBlock/BabyCallHomeBlock";

const HomeBlocksContainer = () => (
  <div className="home-blocks-container">
	<BabyCallHomeBlock/>
	<SoundsHomeBlock/>
	<TemperatureHomeBlock/>
	<HumidityHomeBlock/>
  </div>
);

export default HomeBlocksContainer;
