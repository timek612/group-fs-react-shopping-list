
function ItemsOut({itemList}) {
    return (
        <>
        {
            itemList.map(item => (
            <div className="itemDiv" key={item.id}>
                <p>{itemList && item.name}</p>
                <p>{itemList && item.quantity}<> </>
                {itemList && item.unit}</p>
                <p><button>Purchase</button></p>
                <p><button>Remove</button></p>
            </div>)
                )
        }
        </>    
    )

}

export default ItemsOut