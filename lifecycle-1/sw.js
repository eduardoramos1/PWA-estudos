// Service Worker
self.addEventListener("intall", (ev) => {
	ev.waitUntil(
		new Promise((resolve) => {
			setTimeout(resolve, 5000);
		})
	);
});

self.addEventListener("activate", () => {
	console.log("Service Worker ativo 2");
});
