import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';




function App() {

    const addItem = (newItem) => {
        console.log(newItem);
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
