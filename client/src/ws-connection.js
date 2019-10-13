let webSocket

export function connectToWebsocket ({
    url = 'ws://localhost:8000/ws',
    onOpen = e => console.log('webSocket openned', e),
    onMessage = e => console.log('webSocket message', e.data),
    onError = e => console.error('webSocket error', e)
} = {}) {
    webSocket = new WebSocket(url)
    webSocket.onopen = onOpen
    webSocket.onmessage = onMessage
    webSocket.onerror = onError
}

export function sendMessage (message) {
    if (!webSocket) {
        throw new Error('Websocket not initialized')
    }
    webSocket.send(JSON.stringify(message))
}
