import React from 'react';
import '../App.css';
function Message({isCorrect}) {
    const message=[{
        text: "write IP address or URL",
        isCorrect: null,
        color: "black",
    },
    {
        text: "Correct",
        isCorrect: true,
        color: "green",
    },
    {
        text: "Incorrect! Plese write ONLY IP address or URL",
        isCorrect: false,
        color: "red",
    }]
    let displayedMessage = message.filter(element => element.isCorrect === isCorrect)[0]
    return(
        <p style={{color:displayedMessage.color}}>{displayedMessage.text}</p>
    )
}
export default Message;