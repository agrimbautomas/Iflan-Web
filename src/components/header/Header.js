import React from "react";
import TmpHum from "../tmpHum/TmpHum";
import './Header.scss';

const Header = () => (
  <header>
	<div className="left-block">
	  <h1>iFlan</h1>
	</div>
	<div className="right-block">
	  <TmpHum/>
	</div>
  </header>
);

export default Header;
