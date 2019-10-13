import React from 'react';
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { actions } from '../actions'

const UnconnectedWelcomeModal = ({
    isOpen,
    handleUpdateEmail,
    handleClose,
}) => {
    return (
        <div className="welcome">
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Welcome
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your email below. This will be used as your chat user name.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        onChange={(e) => handleUpdateEmail(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Join Chat
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isOpen: state.welcome.isOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleUpdateEmail: (newValue) => dispatch(actions.updateEmail(newValue)),
        handleClose: (e) => {
            console.log('handleClose event', e.target.value, 'e', e)
            dispatch(actions.closeWelcomeModal())
        },
    }
}

export const WelcomeModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedWelcomeModal)
