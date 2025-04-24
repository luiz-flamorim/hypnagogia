const ws = new WebSocket(WEBSOCKET_URL);

let nightmareBox = document.querySelector("#nightmare");
nightmareBox.addEventListener(
	"input",
	(event) => {
		ws.send(JSON.stringify({ prompt: nightmareBox.value }));
	},
	false
);

let controlledByTD = document.querySelector(".controlledByTD");

ws.addEventListener("open", (event) => {
	console.log("Socket connection open");
	// alert('Successfully connected to socket server 🎉');
	ws.send("pong");
});

ws.addEventListener("error", (error) => {
	console.error("Error in the connection", error);
	alert("error connecting socket server", error);
});

ws.addEventListener("close", (event) => {
	console.log("Socket connection closed");
	alert("closing socket server");
});
