
function connectToWebsocket () {
    const WS_URL = 'ws://localhost:8000/ws'
    const webSocket = new WebSocket(WS_URL)

    const events = ['onopen', 'onmessage', 'onerror']
    events.forEach(event =>
        webSocket[event] = console.info.bind(console, event)
    )
}

connectToWebsocket()
