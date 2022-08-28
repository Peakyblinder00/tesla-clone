import { useReducer } from "react";

export const initial = {
    img: [],
    dark: "#424242fd"
}

export function reducer(state, action){
    switch(action.type){
        case "one":
            return state = {...state, img: state.img = "../../images/modelSimages/new1.jpg"}
        case "two":
            return state = {...state, img: state.img = "../../images/modelSimages/new2.jpg"}
        case "dark":
            return state = {...state, dark: state.dark = "#171a21"}
        case "light": 
            return state = {...state, dark: state.dark = "#424242fd"}
        default: return state =""
    }
}