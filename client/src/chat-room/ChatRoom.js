import React from 'react';
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { actions } from '../actions'

const UnconnectedChatRoom = ({
    isOpen,
    loggedInUser,
    addNewMessage,
    messages = [],
}) => {
    const [value, setValue] = React.useState('')

    if (!isOpen) return null

    return <>
        <h3>Logged in as "{loggedInUser}"</h3>

        <h4>Messages:</h4>

        <ul>{
            messages.map(msg =>
                <li>{msg}</li>
            )
        }</ul>

        <form
            onSubmit={e => {
                e.preventDefault()
                console.log('submit', e, e.target)
                addNewMessage(value)
                setValue('')
            }}
        >
            <TextField
                autoFocus
                margin="dense"
                id="new-message"
                label="New Chat message"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">&gt;</Button>
        </form>
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
        addNewMessage: (message) => dispatch(actions.addNewMessage(message))
    }
}

export const ChatRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedChatRoom)
