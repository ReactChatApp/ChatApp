import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () =>{
    return(
        <ChatEngine
            height="100vh"
            projectID="fdfdf85f-b689-4e7a-8b30-94eb155efd1a"
            userName="gopal123"
            userSecret="123123"
            renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />} 
        />
    )
}
export default App;