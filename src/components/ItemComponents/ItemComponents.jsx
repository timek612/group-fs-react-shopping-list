import axios from "axios";

function ItemComponents({ getItems, keyid, ispurchased, name, quantity, unit }) {
    
    const purchaseItem = (key) => {
        console.log('clicked');

        axios ({
            method: 'PUT',
            url: `/items/${key}`
        })
        .then(response => {
            console.log(response);
            getItems();
        })
        .catch(err => {
            console.log(err);
        })
    }

    const deleteItem = (key) => {

        axios ({
            method: 'DELETE',
            url: `/items/${key}`
        }).then(result =>{
            console.log(result);
            getItems();
        }).catch(err =>{
            console.log(err);
        })
    }
    
    return (
        <div className="itemDiv">
            <p>{name}</p>
            <p>{quantity}<> </>
                {unit}</p>
            <p><button onClick={() =>purchaseItem(keyid)}>Purchase</button></p>
            <p><button onClick={() =>deleteItem(keyid)}>Remove</button></p>
        </div>
    )
}

export default ItemComponents