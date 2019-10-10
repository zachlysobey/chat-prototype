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
    handleClickLogin,
    handleClose,
}) => {
    return (
        <div className="welcome">
            <Button
                onClick={handleClickLogin}
                color="secondary"
            >
                Log-in
            </Button>
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
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
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
        handleClickLogin: () => dispatch(actions.openWelcomeModal()),
        handleClose: () => dispatch(actions.closeWelcomeModal()),
    }
}

export const WelcomeModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedWelcomeModal)
