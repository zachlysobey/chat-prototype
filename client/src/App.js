import React from 'react';
import { Provider } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { connectToWebsocket } from './ws-connection'
import { configureStore } from './redux-store'
import { actions } from './actions'
import { WelcomeModal } from './welcome-modal/WelcomeModal'
import { ChatRoom } from './chat-room/ChatRoom'

const App = () =>  {
  const store = configureStore()
  connectToWebsocket({
    onMessage: e => {
      console.log('onMessage', e.data)
      store.dispatch(actions.addNewMessage(e.data))
    }
  })
  return <Provider store={store}>
    <div className="app">
      <CssBaseline />
      <AppBar position="static">
        <h1 style={{ textAlign: 'center' }}>Chat Prototype</h1>
      </AppBar>
      <Container fixed>
        <Typography component="div">
          <WelcomeModal />
          <ChatRoom />
        </Typography>
      </Container>
    </div>
  </Provider>
}

export default App;
