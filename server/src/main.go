package main

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func main() {
	log.Println("Hello, World!")

	fs := http.FileServer(http.Dir("../../client/build"))
	http.Handle("/", fs)

	http.HandleFunc("/ws", handleWs)

	log.Println("http server started on http://localhost:8000")

	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func handleWs(
	w http.ResponseWriter,
	r *http.Request,
) {
	log.Println("handleWs")

	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}

	defer ws.Close()

	bytes := []byte("foo bar")
	ws.WriteMessage(websocket.TextMessage, bytes)
}
