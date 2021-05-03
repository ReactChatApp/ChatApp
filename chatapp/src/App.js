import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from './components/LoginForm';

const App = () =>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
            height="100vh"
            projectID="fdfdf85f-b689-4e7a-8b30-94eb155efd1a"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />} 
        />
    )
}
export default App;