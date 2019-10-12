import React from 'react';
import { Provider } from 'react-redux'

import { configureStore } from './redux-store'

import { WelcomeModal } from './welcome-modal/WelcomeModal'
import { ChatRoom } from './chat-room/ChatRoom';

const App = () => 
  <Provider store={configureStore()}>
    <div className="app">
      <h1>Chat Prototype</h1>

      <WelcomeModal />
      <ChatRoom />
    </div>
  </Provider>

export default App;
