package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type ChatMessage struct {
	User    string
	Message string
}

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
	http.Handle("/", http.FileServer(http.Dir("../../client/build")))
	http.HandleFunc("/ws", handleWs)

	log.Println("http server starting on http://localhost:8000")
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
		Message: "Welcome to Zach Chat!",
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

		var chatMessage ChatMessage
		if err := json.Unmarshal(message, &chatMessage); err != nil {
			panic(err)
		}

		if chatMessage.Message == "<connected>" {
			userConnectedResponseJSON := &ChatMessageJSON{
				User:    serverUser,
				Message: fmt.Sprintf("%s has joined the chat!", chatMessage.User),
			}
			marshalledJSON, _ := json.Marshal(userConnectedResponseJSON)
			err = ws.WriteMessage(websocket.TextMessage, marshalledJSON)
		} else {
			err = ws.WriteMessage(messageType, message)
		}
		if err != nil {
			log.Println("WriteMessage (echo) error:", err)
			break
		}
	}
}
