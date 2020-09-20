import React from "react";
import './HomeBlocksContainer.scss';
import SoundsHomeBlock from "../homeBlocks/SoundsHomeBlock/SoundsHomeBlock";

const HomeBlocksContainer = () => (
  <div className="home-blocks-container">
	<SoundsHomeBlock/>
	<SoundsHomeBlock/>
	<SoundsHomeBlock/>
	<SoundsHomeBlock/>
  </div>
);

export default HomeBlocksContainer;
