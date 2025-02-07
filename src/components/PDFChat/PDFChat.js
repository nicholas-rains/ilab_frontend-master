import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, TextField } from '@mui/material';
import Message from '../Message/Message';
import axios from 'axios';
import './PDFChat.css';

// PDFChat component
// This component is responsible for rendering the chat interface and handling user input
// Props: handleNewMessage, extractedText
// handleNewMessage: function to handle new messages
// extractedText: extracted text from the uploaded PDF
const PDFChat = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);
    const messageContainerRef = useRef(null);

    // Handle new messages
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };



    // Handle user input
    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    // Handle form submission using sessionID as a prop
    const handleSubmit = async () => {
        if (inputText !== '') {
            const userMessage = { text: inputText, sender: 'user' };
            sessionStorage.setItem('messages', JSON.stringify([...JSON.parse(sessionStorage.getItem('messages')), userMessage]));
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInputText('');
        };

        try {
            // Create FormData object and append the input text and sessionID
            const formData = new FormData();
            
            // Retrieve the sessionID from sessionStorage
            const sessionID = sessionStorage.getItem('sessionID');

            // Append the input text and sessionID to the FormData object
            const data = { query: inputText, session_id: sessionID };
            const response = await axios.post('http://localhost:5005/api/chat', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const botMessage = { text: response.data.response, sender: 'bot' };
            sessionStorage.setItem('messages', JSON.stringify([...JSON.parse(sessionStorage.getItem('messages')), botMessage]));
            setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
        console.error('Error in chat:', error);
    }
};

useEffect(() => {
    // Scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
}, [messages]);

useEffect(() => {
    // On initial page render, create a 'messages' entry in session storage if it doesn't already exist and set the messages state
    if (!sessionStorage.getItem('messages')) {
        sessionStorage.setItem('messages', JSON.stringify([]));
    }
    setMessages(JSON.parse(sessionStorage.getItem('messages')));
}, []);

return (
    <Container className="chat-container"
               elevation={4}
               ref={chatContainerRef}>
        <div className="message-container" ref={messageContainerRef}>
            {messages.map((message, index) => (
                <Message key={index} sender={message.sender} text={message.text}/>
            ))}
        </div>
        <div className="input-container">
            <TextField
                label="Ask me something..."
                variant="outlined"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                className="input-field"
            />
            <Button variant="contained"
                    color="primary"
                    onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    </Container>
);
};

export default PDFChat;