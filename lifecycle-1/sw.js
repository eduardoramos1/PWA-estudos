// Service Worker
self.addEventListener("fetch", (ev) => {
	// verifica se a url da requisição termina com "style.css"
	// if (ev.request.url.endsWith("style.css")) {
	// 	console.log("Fetch Event for css " + ev.request.url);
	// 	// Responde a requisição com outro valor
	// 	ev.respondWith(fetch("./style2.css"));
	// }
	// if (ev.request.url.endsWith("/greet")) {
	// 	// criando um objeto de resposta
	// 	let headers = new Headers({
	// 		"Content-Type": "text/html",
	// 	});
	// 	let customRes = new Response("<h1>Hello World!</h1>", {
	// 		headers,
	// 	});
	// 	ev.respondWith(customRes);
	// }

	if (ev.request.url.endsWith("/camera_feed.html")) {
		// se a requisição for feita com o final 'camera_feed.html, tenta fazer
		//  a requisição normalmente
		ev.respondWith(
			fetch(ev.request).then((res) => {
				if (res.ok) return res;

				return new Response("Camera feed não disponível");
			})
		);
	}
});
