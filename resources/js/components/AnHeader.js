// resources/js/components/AnHeader.js

import React from 'react';
import { createRoot } from 'react-dom/client';
const anHeader = createRoot(document.getElementById('an-header'));

function AnHeader(){

    return (
        <div>
            <header className="header mt-auto py-3 bg-dark">
                <div className="container">
                    <span className="text-light">An header</span>
                </div>
            </header>
        </div>
    );
}



anHeader.render(
    <React.StrictMode>
        <AnHeader />
    </React.StrictMode>
);
