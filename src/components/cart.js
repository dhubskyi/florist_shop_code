import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, deleteItemFromCart, deleteAllItems  } from "./itemscounter";
function Cart(){
    const {cartItems} = useSelector((state) => state.items);
    const {items} = useSelector((state) => state.items);
    const {itemsP} = useSelector((state) => state.items);
    const {itemsQ} = useSelector((state) => state.items);
    const avItems = [];
    for(let i = 0; i<cartItems.length; i++){
        if(cartItems[i].q!=0){
            avItems.push(cartItems[i]);
        }
    }
    //counting the amount
    
    const dispatch = useDispatch();
    const info = avItems.map(item => 
        <div class="items">
            <h2>{items[item.id].name}</h2>
            <img src={items[item.id].img} class="itemimg"/>
            <p>{items[item.id].about}</p>
            <p style={{marginTop:"-.5em"}}>{items[item.id].price}$</p>
            <div id="cartAdj" style={{marginTop:"-.5em"}}>
                <p>Quantity: {item.q}pcs</p>
                <button class="itembtn" onClick={() => dispatch(addItemToCart(items[item.id].id))}>More</button>
                <button class="itembtn" onClick={() => dispatch(deleteItemFromCart(items[item.id].id))}>Less</button>
            </div>
            <p style={{marginTop:"-.5em"}}>Total price: {items[item.id].price*item.q}$</p>
            <button onClick={() => {dispatch(deleteAllItems(items[item.id].id))}}>Delete the item</button>
        </div>
    );
    return <>
    <div id="checkout">
        <h2>Total items: {itemsQ}pcs</h2>
        <h2>Total price: {itemsP}$</h2>
        <button style={{height:"2em", marginTop:"1.2em"}} onClick={() => alert("Comming soon")}>checkout</button>
    </div>
        
    <div id="cartitemscontainer">{ info }</div>
    </>
}
export default Cart;