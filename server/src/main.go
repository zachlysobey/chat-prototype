package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type ChatMessageJSON struct {
	User    string `json:"user"`
	Message string `json:"message"`
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

var serverUser = "ChatBot"

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

	initialChatMessageJSON := &ChatMessageJSON{
		User:    serverUser,
		Message: "Hello Client!",
	}
	marshalledJSON, _ := json.Marshal(initialChatMessageJSON)
	err = ws.WriteMessage(websocket.TextMessage, marshalledJSON)
	if err != nil {
		log.Println("WriteMessage (initial) error:", err)
	}

	for {
		messageType, message, err := ws.ReadMessage()
		if err != nil {
			log.Println("Read Error:", err)
			break
		}
		log.Printf("recieved message: \"%s\"", message)

		err = ws.WriteMessage(messageType, message)
		if err != nil {
			log.Println("WriteMessage (echo) error:", err)
			break
		}
	}
}
