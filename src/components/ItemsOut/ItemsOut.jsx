import ItemComponents from "../ItemComponents/ItemComponents"
function ItemsOut({ getItems, itemList }) {
    
    console.log('looping');
    return (
        <>
            {
                itemList.map(item => (
                    <ItemComponents key={item.id}
                    getItems={getItems}
                    keyid={item.id}
                     ispurchased={item.ispurchased}
                      name={item.name}
                      unit={item.unit}
                      quantity={item.quantity}
                       />
                    )
                )
            }
        </>
    )

}

export default ItemsOut