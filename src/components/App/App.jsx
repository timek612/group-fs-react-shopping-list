import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';


function App() {

    const handleReset = () => {
        axios({
            method: 'PUT',
            url: '/items'
        }).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err);
        })
    }

    const handleDeleteAll = () => {
        axios({
            method: 'DELETE',
            url: '/items'
        }).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <h2>Shopping List</h2>
                <button onClick={handleReset}>Reset</button> 
                <button onClick={handleDeleteAll}>Clear</button>
            </main>
        </div>
    );
}

export default App;
