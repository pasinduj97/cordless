import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID='580351b0-b47a-4d40-a7da-7c7f55662370'
      userName='pasinduj97'
      userSecret='30552214'
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
