


import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import GroceryForm from '../GroceryForm/GroceryForm'
import './App.css';




function App() {


    const addItem = (newItem) => {
        console.log(newItem);
        console.log('adding items');
    }


    const handleReset = () => {
        axios({
            method: 'PUT',
            url: '/items'
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    const handleDeleteAll = () => {
        axios({
            method: 'DELETE',
            url: '/items'
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }


    let [itemList, setItemList] = useState([]);


    useEffect(() => {
        console.log('effect triggered');
        getItems();
    }, [])

    const getItems = () => {
        console.log('in get students');

        axios({
            method: 'GET',
            url: '/items'
        }).then(response => {
            setItemList(response.data)
        }).catch(err => {
            console.log(err);
        })
    }
    console.log(itemList);


    return (
        <div className="App">
            <Header />
            <main>

                <GroceryForm addItem={addItem} />

                <p>Under Construction...</p>
                <h2>Shopping List</h2>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDeleteAll}>Clear</button>

            </main>
        </div>
    );
}

export default App;
