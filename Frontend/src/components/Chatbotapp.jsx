import React from 'react';
import Chatbot from './Chatbot';
import '../home/styles/chatbot.css';

function Chatbotapp() {
  return (
    <div className="chatbotapp" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <div style={{ backgroundColor: '#036305', color: 'white', padding: '20px', borderRadius: '5px', margin: '2' }}>
        <h3>HealthCare Chatbot</h3>
        
      </div>
      <p style={{ margin: '0', padding: '10px' }}>🤖 Ask me anything!</p>
      
      {/* Main content including the Chatbot component */}
      <Chatbot />
    </div>
  );
}

export default Chatbotapp;
