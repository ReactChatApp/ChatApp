import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername]=usestate('');
    const [password, setPassword]=usestate('');
    const handleSubmit = (e) => {
            e.preventDefault();
            const authObject = { 'Project-ID': "fdfdf85f-b689-4e7a-8b30-94eb155efd1a", 'User-Name': username, 'User-Secret': password }

    }
    try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
  
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
  
        window.location.reload();
        setError('');
      } catch (err) {
        setError('Oops, incorrect credentials.');
      }
    }
    return (
        <div className="wrapper">
          <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
              <div align="center">
                <button type="submit" className="button">
                  <span>Start chatting</span>
                </button>
              </div>
            </form>
            <h1>{error}</h1>
          </div>
        </div>
    
      )
    }