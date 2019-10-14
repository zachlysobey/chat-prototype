# Chat Prototype

## Overview

A stupid simple chat application. No database persistence, and no proper authentication.

This was initally built as a coding challenge for a job interview. [See the specifications here](./SPECIFICATIONS.md)

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

## Whats next:

I've added desired features, and ideas for next steps as [GitHub issues](https://github.com/zachlysobey/chat-prototype/issues)
