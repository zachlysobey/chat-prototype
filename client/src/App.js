import React from 'react';
import { Provider } from 'react-redux'

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
      <h1>Chat Prototype</h1>

      <WelcomeModal />
      <ChatRoom />
    </div>
  </Provider>
}

export default App;
