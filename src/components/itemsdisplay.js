import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "./itemscounter";
function checkQ(arr, x){
    for(let i = 0; i<arr.length; i++){
        if(arr[i].id == x){
            if(arr[i].q == 0){
                return false;
            }else{
                return true;
            }
        }
    }
    return false;
}
function checkN(arr, x){
    for(let i = 0; i<arr.length; i++){
        if(arr[i].id == x){
            return arr[i].q;
        }
    }
    return false;
}
function Display (){
    const dispatch = useDispatch();
    const {items} = useSelector((state) => state.items);
    const {cartItems} = useSelector((state) => state.items);
    const content = items.map(item => <div class="items">
            <h2>{item.name}</h2>
            <img src={item.img} class="itemimg"/>
            <p>{item.about}</p>
            <p>{item.price}$</p>
            <button onClick={() => {
                if(checkQ(cartItems, item.id) == 0){
                    dispatch(addItemToCart(item.id))
                }
                }}>{checkQ(cartItems, item.id) ? "Item added" : "Add item"}</button>
        </div>);
    return <><div id="itemscontainer">
    {content}
</div><br/></>
}
export default Display;