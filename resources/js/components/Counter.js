// resources/js/components/Counter.js

import axios from "axios";
import React, { useState } from "react";
import ReactDOM from 'react-dom';


function Counter() {
    // Set the initial count state to zero, 0
    const [count, setCount] = useState(0);

    // Create handleIncrement event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
        notifyServer();
    };

    // Create handleDecrement event handler
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
        notifyServer();
    };

    // Notifies the server about the change
    const notifyServer = () => {
        axios.post('/count', {
            message: 'Counter Updated!',
        })
    }

    return(
        <div>
            <button onClick={handleDecrement}>Minus 1</button>
            <span> {count} </span>
            <button onClick={handleIncrement}>Plus 1</button>
        </div>
    );
}

if(document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'))
}
