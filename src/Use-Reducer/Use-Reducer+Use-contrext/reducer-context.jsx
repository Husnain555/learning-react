import {createContext, useContext, useReducer} from "react";
import {Counter} from "./counter1";
export const Counter11 = createContext();

const initial = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initial
        default:
            return state

    }
}


export function Hell (){
    const [count,dispatch ] = useReducer(reducer, initial)


    return(
        <Counter11.Provider value={{countState:count,countDispatch:dispatch}}>
            <h1>count is {count}</h1>
            <Counter/>
        </Counter11.Provider>
    )

}