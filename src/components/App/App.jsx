import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';



function App() {
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
        }).then (response => {
            setItemList(response.data)
        }).catch (err => {
            console.log(err);
        })
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
