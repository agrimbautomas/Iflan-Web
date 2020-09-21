import React, { useEffect, useState } from "react";
import './InstallButton.scss';


const InstallButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
	const handler = e => {
	  e.preventDefault();
	  console.log("we are being triggered :D");
	  setSupportsPWA(true);
	  setPromptInstall(e);
	};
	window.addEventListener("beforeinstallprompt", handler);

	return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
	evt.preventDefault();
	if (!promptInstall) {
	  return;
	}
	promptInstall.prompt();
  };
  if (!supportsPWA) {
	console.log("Does not support PWA");
	return null;
  }
  return (
	<button
	  className="install-button"
	  id="setup_button"
	  aria-label="Install app"
	  title="Install app"
	  onClick={onClick}
	>
	  <i className="fas fa-download"></i>
	</button>
  );
};

export default InstallButton;

