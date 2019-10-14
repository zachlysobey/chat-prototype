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

	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
	log.Println("http server started on http://localhost:8000")
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
		Message: "Connected",
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

		var jsonData ChatMessage
		if err := json.Unmarshal(message, &jsonData); err != nil {
			panic(err)
		}
		user := jsonData.User
		chatMessage := jsonData.Message
		log.Println(user, chatMessage)

		if chatMessage == "<connected>" {
			userConnectedResponseJSON := &ChatMessageJSON{
				User:    serverUser,
				Message: fmt.Sprintf("Hello, %s!", user),
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
