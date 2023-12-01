import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: []
}

//para que tome uno como fav y si no tiene que inicie 
export default function reducer(state = initialState, {type, payload}) { // Action= {type y payload}
    switch(type){
        case ADD_FAV:
           return {
            ...state,
            myFavorites: [...state.myFavorites, payload]
           } //lo pisamos
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(
                favorite => favorite.id !== Number(payload)
            );
            return {
                ...state,
                myFavorites: filteredFavs
            }
        default:
            return {...state}
        }
}
