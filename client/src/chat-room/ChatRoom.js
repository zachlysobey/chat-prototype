import React from 'react';
import { connect } from 'react-redux'


import { actions } from '../actions'

const UnconnectedChatRoom = ({
    isOpen,
    loggedInUser,
}) => {
    return (
        <div style={isOpen ? {} : {display: 'none'}}>
            Logged in as {loggedInUser}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isOpen: state.chatRoom.isOpen,
        loggedInUser: state.chatRoom.loggedInUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export const ChatRoom = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedChatRoom)
