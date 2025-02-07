import React, {useEffect, useRef, useState} from 'react';
import {Button, Container, TextField} from '@mui/material';
import Message from '../Message/Message';
import './Chat.css';
import axios from "axios";

const Chat = ({   externalMessage = {},
                  handleNewMessage,
                  showInput = true,
                  triggerSubmit = false,
                  resetTriggerSubmit
              }) => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);
    const messageContainerRef = useRef(null);


    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        console.log('Input Text:', inputText);
        if (inputText !== '') {
            const userMessage = {text: inputText, sender: 'user'};
            console.log('User Message:', userMessage);
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setInputText('');

            // Send user message to Terminal component
            handleNewMessage(userMessage);

            try {
                
                const formData = new FormData();
                formData.append('text',inputText)

                const response = await axios.post('http://localhost:5005/chat', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                //console.log(response.data);
                
                const botMessage = {text: response.data, sender: 'bot'};
                setMessages((prevMessages) => [...prevMessages, botMessage]);

                // Send bot response to Terminal component
                handleNewMessage(botMessage);
            } catch (error) {
                console.error(error);
                // Handle error response
            }
        }

        if (Object.keys(externalMessage).length !== 0) {
            console.log('External Message:', externalMessage);
            setMessages((prevMessages) => [...prevMessages, externalMessage]);
            handleNewMessage(externalMessage);

            const botMessage = {text: "Hi this is VAARTA Bot.. ", sender: 'bot'};
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            handleNewMessage(botMessage);
            resetTriggerSubmit();
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the chat container when new messages are added
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        console.log('Trigger Submit:', triggerSubmit);
        if (triggerSubmit) {
            handleSubmit();
        }
    }, [triggerSubmit]);

    return (
        <Container className="chat-container"
                   elevation={4}
                   ref={chatContainerRef}>
            <div className="message-container" ref={messageContainerRef}>
                {messages.map((message, index) => (
                    <Message key={index} sender={message.sender} text={message.text}/>
                ))}
            </div>
            {showInput && (
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
            )}
        </Container>
    );
};

export default Chat;
