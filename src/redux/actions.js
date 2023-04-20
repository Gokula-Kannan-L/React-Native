export const GET_ELECTRONICS = 'GET_ELECTRONICS';
export const GET_MEN_CLOTHINGS = 'GET_MEN_CLOTHINGS';
export const GET_WOMEN_CLOTHINGS = 'GET_WOMEN_CLOTHINGS';
export const GET_ACCESSORIES = 'GET_ACCESSORIES';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ELECTRONICS = 'ELECTRONICS';
export const ACCESSORIES = 'ACCESSORIES';
export const MEN_CLOTHINGS = 'MEN_CLOTHINGS';
export const WOMEN_CLOTHINGS = 'WOMEN_CLOTHINGS';

export const getElectronics= () =>({   
        type: GET_ELECTRONICS, 
    }); 

export const getMenClothings= () =>({   
        type: GET_MEN_CLOTHINGS, 
    });

export const getWomenClothings= () =>({   
        type: GET_WOMEN_CLOTHINGS, 
    });

export const getAccessories= () =>({   
        type: GET_ACCESSORIES, 
    });


export const addToCart = data =>  dispatch =>{
        dispatch({
            type:ADD_TO_CART,
            payload:data,
        })
    }

export const Increment = id => (dispatch) =>{
        dispatch({
            type:INCREMENT,
            payload:id,
        })
    }

export const Decrement = id => dispatch =>{
        dispatch({
            type:DECREMENT,
            payload:id,
        })
    }

export const removeFromCart = id =>  dispatch =>{
        dispatch({
            type:REMOVE_FROM_CART,
            payload:id,
        })
    }
