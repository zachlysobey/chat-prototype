# Chat Prototype

## Overview

A stupid simple chat application. No database persistence, and no proper authentication.

## Architecture

This project is seperated into two main directories:
- `/server`: a *Golang* WebSocket server
- `/client`: a React app (using [create-react-app](https://github.com/facebook/create-react-app) and [redux-starter-kit](https://redux-starter-kit.js.org))

## Usage

### Prerequisites

- Git
- GO
- NodeJs, Npm

*This was developed and tested only on OSX with go v1.13.1, node v12.3.1, and npm v6.9.0*

### Clone and install dependencies

```sh
$ cd $GOPATH/src/github.com/
$ git clone git@github.com:zachlysobey/chat-prototype.git
$ cd client && npm install; cd -
```

*NOTE: I'm actually not clear if there is anything that needs to be done to install Go dependencies. I have not experimented beyond initial development here.*

### Build the client

```sh
# (from the chat-prototype root directory)
$ cd client/
$ npm run build
```

### Run the server

```sh
# (from the chat-prototype root directory)
$ cd server
$ go run main.go
```

### Navigate to the app

By default it should be running at http://localhost:8000

### Run the client in development mode

```sh
# (from the chat-prototype root directory)
$ cd client/
$ npm start
```

Navigate to http://localhost:8000 (instead of port :3000) for dev mode. This is the create-react-app dev server, and will auto-reload based on client source changes.

### Run the client unit tests

*Note: I haven't actually touched the unit tests here. I'm sure they break. Usually I'd drive the development with tests, but since this is a quick prototype, that did not seem appropriate.

```sh
# (from the root directory)
$ cd client/
$ npm test
```

## Next steps:

I'll try to document any features I'd like to add in the [GitHub issues](https://github.com/zachlysobey/chat-prototype/issues)

## Specifications:

The engineering team would like you to complete a mini project/coding task. Details below, it should be a runnable project and code we can code review (Using public GitHub repository ideally). This will give you a good sense of our technology stack and your ability to pick it up. We hope you find it a fun exercise and chance to learn something new.  If you have any questions let us know.  Thank you!

### Summary:

Create a full stack React and Golang chat prototype where a user can join the chat and the system auto responses with a welcome message. System keeps track of number of messages. No database or persistence layer is needed, the full application state can restart on new browser window or server restart. Styling for good looks is not necessary, using whatever you can get out of the box with a component library like Material UI is fine. Showing an updated style will be nice. System should use web sockets for chat messages. Any additional helper libraries in the JavaScript or Go world are fine to use.  For UI side using create-react-app bootstrapper is fine.  For state management on UI feel free to use React’s new native options around hooks and contexts, Redux, or Apollo.  If using Apollo we do use this library for backend Go GraphQL, but likely not necessary for this project.  Github readme should describe how to start the frontend and backend services and run it, Docker setup is optional, not required.

### Page 1:

- Welcomes user and collects one input field, email. Offers “join chat” button.

### Page 2:

- User transitioned to a chat window which shows a message with their email that they joined the chat.
- System automatically emits a welcome message introducing our Mount Sinai helper bot.
- User can type any number of other messages that append to the window chat room and a message counter at top increments up as each message is added live.
