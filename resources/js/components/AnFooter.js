// resources/js/components/AnFooter.js

import React from 'react';
import { createRoot } from 'react-dom/client';
const anFooter = createRoot(document.getElementById('an-footer'));

function AnHeader(){

    return (
        <div>
            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <span className="text-light">An Footer</span>
                </div>
            </footer>
        </div>
    );
}



anFooter.render(
    <React.StrictMode>
        <AnHeader />
    </React.StrictMode>
);
