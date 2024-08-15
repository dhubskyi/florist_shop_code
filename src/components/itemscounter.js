import { createSlice } from "@reduxjs/toolkit";
export const itemsCounter = createSlice({
    name: "items",
    initialState: {
        items: [
            {id: 0, name: "Cactus", price: 15, about: "A tiny friend for your bedroom", img: "https://cdn.pixabay.com/photo/2019/06/20/15/11/cactus-4287345_1280.jpg"},
            {id: 1, name: "Snake Plant", price: 25, about: "An astonishing plant with dark leaves", img: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg"},
            {id: 2, name: "Aloe Vera", price: 20, about: "Use its leaves for healthy procedures", img: "https://cdn.pixabay.com/photo/2021/06/06/08/26/aloe-vera-6314695_1280.jpg"},
            {id: 3, name: "Peace Lily", price: 25, about: "A magnificent flower to attract your eye", img: "https://cdn.pixabay.com/photo/2015/11/24/23/38/peace-lily-1061022_960_720.jpg"},
            {id: 4, name: "Orange Tree", price: 65, about: "Eat your own fruit right from the garden", img: "https://cdn.pixabay.com/photo/2016/01/02/01/59/oranges-1117628_1280.jpg"},
            {id: 5, name: "Fig Tree", price: 70, about: "Taste the sweet flavour of fresh figs", img: "https://cdn.pixabay.com/photo/2017/08/08/20/21/fig-2612609_1280.jpg"},
        ],
        cartItems: [{id: 0, q: 0},
                    {id: 1, q: 0},
                    {id: 2, q: 0},
                    {id: 3, q: 0},
                    {id: 4, q: 0},
                    {id: 5, q: 0},
        ],
        itemsQ: 0,
        itemsP: 0

        /*
        CHANGING FORMAT:

        NOW:
        <id>:<number selected> 





        */





    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        addItemToCart: (state, action) => {
            for(let i = 0; i<state.cartItems.length; i++){
                if(state.cartItems[i].id == action.payload){
                    state.cartItems[i].q++;
                }
            }
            var quantity = 0;
            var price = 0;
            for(let i = 0; i<state.cartItems.length; i++){
                quantity+=state.cartItems[i].q;
                for(let j = 0; j<state.items.length; j++){
                    if(state.items[j].id==state.cartItems[i].id){
                        price+=state.items[j].price*state.cartItems[i].q;
                    }
                }
            }                     
            state.itemsQ = quantity;
            state.itemsP = price;
        },
        deleteItemFromCart: (state, action) => {
            for(let i = 0; i<state.cartItems.length; i++){
                if(state.cartItems[i].id == action.payload){
                    if(state.cartItems[i].q>0){
                        state.cartItems[i].q--;
                    }else{
                        alert("Absent in the cart!");
                    }
                }
            }
            var quantity = 0;
            var price = 0;
            for(let i = 0; i<state.cartItems.length; i++){
                quantity+=state.cartItems[i].q;
                for(let j = 0; j<state.items.length; j++){
                    if(state.items[j].id==state.cartItems[i].id){
                        price+=state.items[j].price*state.cartItems[i].q;
                    }
                }
            }                     
            state.itemsQ = quantity;
            state.itemsP = price;
        },
        deleteAllItems: (state, action) => {
            for(let i = 0; i<state.cartItems.length; i++){
                if(state.cartItems[i].id == action.payload){
                    if(state.cartItems[i].q>0){
                        state.cartItems[i].q=0;
                    }
                }
            }
            var quantity = 0;
            var price = 0;
            for(let i = 0; i<state.cartItems.length; i++){
                quantity+=state.cartItems[i].q;
                for(let j = 0; j<state.items.length; j++){
                    if(state.items[j].id==state.cartItems[i].id){
                        price+=state.items[j].price*state.cartItems[i].q;
                    }
                }
            }                     
            state.itemsQ = quantity;
            state.itemsP = price;
        }
    }
});

export const { addItem, addItemToCart, deleteItemFromCart, deleteAllItems } = itemsCounter.actions; 
export default itemsCounter.reducer;