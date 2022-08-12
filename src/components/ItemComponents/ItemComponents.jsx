import axios from "axios";

function ItemComponents({ keyid, ispurchased, name, quantity, unit }) {
    
    const purchaseItem = (key) => {
        console.log('puchasing item');

        axios ({
            method: 'PUT',
            url: `/items/${key}`
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <div className="itemDiv">
            <p>{name}</p>
            <p>{quantity}<> </>
                {unit}</p>
            <p><button onClick={purchaseItem(keyid)}>Purchase</button></p>
            <p><button>Remove</button></p>
        </div>
    )
}

export default ItemComponents