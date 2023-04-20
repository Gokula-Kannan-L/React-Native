import { ELECTRONICS, MEN_CLOTHINGS, WOMEN_CLOTHINGS, ACCESSORIES, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT } from "./actions";

const initialState ={
    electronics: [],
    menclothings: [],
    womenclothings: [],
    accessories: [],
    cartItems:[],
    quantity:1,
    totalItems:0,
    grandTotal:0
}


function userReducer( state = initialState, action){
    switch(action.type){
        case ELECTRONICS:
            return {...state, electronics:action.data};
        case MEN_CLOTHINGS:
            return {...state, menclothings:action.data};
        case WOMEN_CLOTHINGS:
            return {...state, womenclothings:action.data};
        case ACCESSORIES:
            return {...state, accessories:action.data}; 
        case ADD_TO_CART:
               var checkDuplicate = Boolean(state.cartItems.find( (item) => item.id===action.payload.id));
               if(!checkDuplicate){
                state.totalItems++;
                var item = Object.assign(action.payload,{quantity:1, total: action.payload.price*15});
                state.grandTotal+= item.total;
                return {...state, cartItems:[...state.cartItems,item]};   
               }
               else{
                    state.cartItems.map( (item) => { if(item.id === action.payload.id){ item.quantity++; item.total *= item.quantity; }});
                    state.grandTotal = 0;
                    state.cartItems.forEach( (item) => {state.grandTotal += item.total});
               }
               return {...state, cartItems:state.cartItems};
               
        case REMOVE_FROM_CART:
            state.totalItems--;
            var reduceTotal = state.cartItems.find( (item) => item.id===action.payload);
            state.grandTotal -= reduceTotal.total; 
            return {...state, cartItems:state.cartItems.filter( (item) => item.id !== action.payload)};

        case INCREMENT:
            state.cartItems.map( (item) => { if(item.id === action.payload){ (item.quantity > 0)? (item.quantity++, item.total=item.price*15*item.quantity) : item.quantity}});
            state.grandTotal = 0;
            state.cartItems.forEach( (item) => {state.grandTotal+= item.total});
            return {...state, cartItems:state.cartItems};
        
        case DECREMENT:
            state.cartItems.map( (item) => { if(item.id === action.payload){ (item.quantity > 1)? (item.quantity--, item.total=item.price*15*item.quantity ) : item.quantity}});
            state.grandTotal = 0;
            state.cartItems.forEach( (item) => {state.grandTotal+= item.total});
            return {...state, cartItems:state.cartItems};
            
        default:
            return state;
    }
    
}


export default userReducer;