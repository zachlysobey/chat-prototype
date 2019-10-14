import React from 'react';
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'

import { actions } from '../actions'

import './chat-room.css'

const UnconnectedChatRoom = ({
    isOpen,
    loggedInUser,
    handleChangeUser,
    sendMessage,
    messages = [],
}) => {
    const [value, setValue] = React.useState('')

    if (!isOpen) return null

    return <>
        <p className="logged-in-message">
            Logged in as "{loggedInUser}"
            <Button
                onClick={handleChangeUser}
                color="secondary"
            >
                Change User
            </Button>
        </p>

        <ul className="chat-messages">{
            messages.map(({ message, user}, key) =>
                <li key={key}
                    className={`message-from-${user===loggedInUser ? 'me' : 'them'}`}
                >
                    <span className="user">{user}</span>
                    <span className="message">{message}</span>
                </li>
            )
        }</ul>

        <AppBar position="fixed" color="primary" className="bottom-appbar">
            <Container fixed>
                <form
                    className="new-message-form"
                    onSubmit={e => {
                        e.preventDefault()
                        console.log('submit', e, e.target)
                        sendMessage(value)
                        setValue('')
                    }}
                >
                    <TextField
                    className="text-input"
                        autoFocus
                        hiddenLabel
                        margin="dense"
                        id="new-message"
                        placeholder="New Chat message..."
                        type="text"
                        variant="filled"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    
                    <Button variant="contained" color="primary" type="submit">&gt;</Button>
                </form>
            </Container>
        </AppBar>
    </>
}

const mapStateToProps = state => {
    return {
        isOpen: !state.welcome.isOpen,
        loggedInUser: state.welcome.email,
        messages: state.chatRoom.messages,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeUser: () => dispatch(actions.openWelcomeModal()),
        sendMessage: (message) => dispatch(actions.sendMessage(message)),
    }
}

export const ChatRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedChatRoom)
