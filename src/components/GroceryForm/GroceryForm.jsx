
import { useState } from "react";
import axios from "axios";







function GroceryForm({ addItem }) {

    const [item, setItem] = useState({ item: "" })
    const [quantity, setQuantity] = useState({ quantity: '' })
    const [unit, setUnit] = useState({ unit: "" })

    console.log('item is,', item.item, quantity.quantity, unit.unit)
    const handleSubmit = (event) => {
        event.preventDefault();
        let newItem = {
            item: item.item,
            quantity: quantity.quantity,
            unit: unit.unit}
        addItem(newItem);
        setItem({item:''});
        setQuantity({quantity:''});
        setUnit({unit:''});

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>ADD AN ITEM</h1>
            <input onChange={(event) => setItem({ item: event.target.value })} placeholder="item" value={item.item} />
            <input onChange={(event) => setQuantity({ quantity: event.target.value })} placeholder="quantity" value={quantity.quantity}/>
            <input onChange={(event) => setUnit({ unit: event.target.value })} placeholder="unit" value={unit.unit}/>
            <button onClick={handleSubmit}>save</button>
        </form>

    )
}



export default GroceryForm

