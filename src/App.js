import './App.css';
import {ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="d737d768-4aec-48fd-9087-aa9fcb131244"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}

export default App;
