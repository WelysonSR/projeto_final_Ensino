'use client'

import NavBar from '@/components/navbar';
import { useEffect, useRef, useState } from 'react';

export default function Comunidade() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatMessagesRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, timestamp: new Date() }]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <NavBar />
      <div>
        <div className="chat-messages" ref={chatMessagesRef}>
          {messages.map((message, index) => (
            <div key={index}>
              {message.text} - {message.timestamp.toLocaleTimeString()}
            </div>
          ))}
        </div>
      </div>
      <div className='div-chat'>
        <input
          type="text"
          value={newMessage}
          className="input-chat-message"
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite sua messagen..."
        />
        <button
          className="input-chat-btn"
          onClick={handleSendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
