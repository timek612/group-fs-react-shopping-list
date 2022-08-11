import React from 'react';

import Header from '../Header/Header.jsx'
import GroceryForm from '../GroceryForm/GroceryForm'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <GroceryForm />
            </main>
        </div>
    );
}

export default App;
