// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator) {
if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register("\\PWA/lifecycle-1/sw.js", {
			scope: "/posts",
		})
		.then(function (registration) {
			console.log("SW registrado");
		})
		.catch(console.log);
}
