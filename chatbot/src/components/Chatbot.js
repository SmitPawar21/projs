import sendImg from "../images/send.svg";
import { useState, useEffect, useRef } from "react";

export const Chatbot = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
    const userInput = document.querySelector(".userInput");

    const handleSend = (e) => {
        e.preventDefault();
        if (input === '') return;

        const newMessage = { text: input, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setInput('');
        userInput.value = '';

        const botResponse = { text: `you said: ${input}`, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const styles = {
        userMessage: {
            width: 'fit-content',
            maxWidth: '48%',
            textAlign: 'left',
            padding: '7px 15px',
            marginLeft: 'auto',
            marginBottom: '5px',
            backgroundColor: '#d1e7dd',
            borderRadius: '25px',
            boxSizing: 'border-box'
          },
          botMessage: {
            width: 'fit-content',
            maxWidth: '48%',
            textAlign: 'left',
            padding: '7px 15px',
            boxSizing: 'border-box',
            marginRight: '50%',
            marginBottom: '5px',
            backgroundColor: '#f8d7da',
            borderRadius: '25px',
          }
    }

    return (
        <div className='chatbot'>
            <div className='navbar'>
                <h1> Chatbot </h1>
            </div>
            <div className='messageList'>
                <div style={styles.botMessage} > Hello, how may I help You </div>
                {messages.map((msg, index) => (
                    <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
                        {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className='inputBox'>
                <input type='text' className='userInput' placeholder='Message Chatbot' onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSend}> <img src={sendImg} /> </button>
            </div>
        </div>
    );
}