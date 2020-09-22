import React from "react";
import TmpHum from "../TmpHum/TmpHum";
import './Header.scss';

const Header = () => (
  <header>
	<div className="grid">
	  <div className="left-block">
		<h1>iFlan</h1>
	  </div>
	  <div className="right-block">
		<TmpHum/>
	  </div>
	</div>
  </header>
);

export default Header;
