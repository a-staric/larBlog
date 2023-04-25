// resources/js/components/HelloReact.js

import React from 'react';
import { createRoot } from 'react-dom/client';
const helloReact = createRoot(document.getElementById('hello-react'));

function HelloReact (){

    function someText(count){
        const result = [];
        for(let index = 0; index < count; index++){
            result.push(
                <div>
                    <span className='text-md text-gray-500'>{index}</span>
                    <br/>
                </div>
            );
        }
        return result;
    }
    function printLog(){
        console.log('Print');
    }



    return (
        <div>
            <h1 onClick={printLog}>Hello React!</h1>
            {someText(150)}
        </div>
    );
}

helloReact.render(
    <React.StrictMode>
        <HelloReact />
    </React.StrictMode>
);
