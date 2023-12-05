import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}


//para que tome uno como fav y si no tiene que inicie 
export default function reducer(state = initialState, {type, payload}) { // Action= {type y payload}
    switch(type){
        case ADD_FAV:{
           return {
            ...state,
            allCharacters: [...state.allCharacters, payload],
            myFavorites: [...state.allCharacters, payload]
           }
        } //lo pisamos
        case REMOVE_FAV:{
            const filteredFavs = state.allCharacters.filter(
                favorite => favorite.id !== Number(payload)
            );
            return {
                ...state,
                allCharacters: filteredFavs,
                myFavorites: filteredFavs
            }
        }
        case FILTER:{
            //para traer a todos
            if(payload === "All"){
               return {
                ...state,
                myFavorites: state.allCharacters
               }
            }
            //{type: FILTER, pauload: "FEMALE"}
            const filteredFavs = state.allCharacters.filter(
                char => char.gender === payload
            )
            return {
                ...state,
                myFavorites: filteredFavs
            }
        }
        case ORDER:
            const orderCopy = [...state.myFavorites];
            if(payload === "A"){
                orderCopy.sort((a, b) => a.id - b.id)
            }
            if(payload === "D"){
                orderCopy.sort((a, b) => b.id - a.id )
            }
            return {
                ...state,
                myFavorites: orderCopy
            }
        default:
            return {...state}
        }
}

//el sort si modifica el array, asi que hay que trabajar con la copia
