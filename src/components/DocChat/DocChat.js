import React, { useState, useEffect, useRef } from 'react';
import { Button, Container, TextField } from '@mui/material';
import Message from '../Message/Message';
import LoadingEllipses from '../LoadingEllipses/LoadingEllipses';
import axios from 'axios';
import './DocChat.css';
 
const backendURL = process.env.REACT_APP_DOCUSSARY_LEGAL_API_URL;
 
// DocChat component
// This component is responsible for rendering the chat interface and handling user input
const DocChat = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Add loading state
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
        }
 
        try {
            setIsLoading(true); // Set loading state to true
            // Create FormData object and append the input text and sessionID
            const formData = new FormData();
           
            // Retrieve the sessionID from sessionStorage
            const sessionID = sessionStorage.getItem('sessionID');
 
            // Append the input text and sessionID to the FormData object
            const data = { query: inputText, session_id: sessionID };
            const response = await axios.post(`${backendURL}/chat`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
 
            const botMessage = { text: response.data.response, sender: 'bot' };
            sessionStorage.setItem('messages', JSON.stringify([...JSON.parse(sessionStorage.getItem('messages')), botMessage]));
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error in chat:', error);
        } finally {
            setIsLoading(false); // Set loading state to false
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
                {isLoading && (
                    <div className="message bot">
                        <LoadingEllipses />
                    </div>
                )}
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
 
export default DocChat;