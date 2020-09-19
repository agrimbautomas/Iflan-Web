export function register() {
  if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js')
	  .then(function ( registration ) {
		// Successful registration
	  }).catch(function ( err ) {
	  // Failed registration, service worker won’t be installed
	});
  }

}

