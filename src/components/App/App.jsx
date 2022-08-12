


import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import GroceryForm from '../GroceryForm/GroceryForm'
import './App.css';
import ItemsOut from '../ItemsOut/ItemsOut.jsx';




function App() {

    let [itemList, setItemList] = useState([]);

    const addItem = (newItem) => {
        console.log(newItem);
        console.log('adding items');
        axios({
            method: 'POST',
            url: '/items',
            data: newItem
        }).then(response => {
            console.log(response)

            getItems();

        }).catch(err => {
            console.log(err)
            alert('not posting')
        })
    }


    const handleReset = () => {
        axios({
            method: 'PUT',
            url: '/items'
        }).then(response => {
            console.log(response)
            getItems();
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
            getItems();
        }).catch(err => {
            console.log(err);
        })
    }


    useEffect(() => {
        console.log('effect triggered');
        getItems();
    }, [])

    const getItems = () => {
        console.log('in get items');

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
            {/* <table>
                <thead>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table> */}
            <ItemsOut itemList={itemList} />
        </div>
    );
}

export default App;
