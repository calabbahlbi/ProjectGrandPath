import React, { useState, useEffect } from 'react';
import './ChatContainer.css';

/**
 * Functional component representing a chat container.
 */
const ChatContainer = () => {
    // State for storing messages and user input
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    /**
     * Function to send a user message and simulate a response from the chatbot.
     */
    const sendMessage = () => {
        // Check if the user input is not empty
        if (userInput.trim() !== '') {
            // Update messages with the user's message
            setMessages([...messages, { type: 'user', text: userInput }]);
            // Clear the user input
            setUserInput('');

            // Simulate a response from the chatbot after a delay
            setTimeout(() => {
                setMessages([...messages, { type: 'user', text: userInput }, { type: 'bot', text: 'Thanks for your message!' }]);
            }, 500);
        }
    };

    /**
     * Effect hook to scroll to the bottom when messages are updated.
     */
    useEffect(() => {
        // Get the chat messages container element
        const chatMessages = document.getElementById('chat-messages');
        // Scroll to the bottom of the chat messages container
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, [messages]);

    // Render the chat container UI
    return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>Promise Unlocked</h1>
            </div>
            <div className="chat-messages" id="chat-messages">
                {/* Map through messages and render message containers */}
                {messages.map((message, index) => (
                    <div key={index} className={`message-container ${message.type}`}>
                        <div className="message">{message.text}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                {/* Input field for user messages */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                {/* Button to send messages */}
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

// Export the ChatContainer component
export default ChatContainer;