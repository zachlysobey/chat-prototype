import React from 'react';
import { WelcomeModal } from './welcome-modal/WelcomeModal'
import { Provider } from 'react-redux'

import { configureStore } from './redux-store'

const App = () => 
  <Provider store={configureStore()}>
    <div className="app">
      <h1>Chat Prototype</h1>
      <WelcomeModal />
    </div>
  </Provider>

export default App;
