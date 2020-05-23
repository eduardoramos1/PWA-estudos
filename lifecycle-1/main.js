// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register("\\PWA/lifecycle-1/sw.js")
		.then(function (registration) {
			// Quando encontra mudança
			registration.onupdatefound = () => {
				console.log("Novo Service Worker encontrado");
				let newSW = registration.installing;

				newSW.onstatechange = () => {
					console.log(newSW.state);
				};
			};
		})
		.catch(console.log);
}
