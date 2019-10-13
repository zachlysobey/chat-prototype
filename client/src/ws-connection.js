
function connectToWebsocket (
    url = 'ws://localhost:8000/ws',
) {
    const webSocket = new WebSocket(url)

    webSocket.onopen = e => {
        console.log('webSocket openned', e)
        webSocket.send("Hello, server!")
    }
    webSocket.onmessage = e => console.log('webSocket message', e.data, e)
    webSocket.onerror = e => console.error('webSocket error', e)
}

connectToWebsocket()
