import {useReducer} from "react";
const intialState = 0
const reducer = (state ,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return intialState
        default:
            return state

    }
}
export function Reducer (){
    const [count, set ] = useReducer(reducer,  intialState)
    return (
        <div>
            <h1 className='font-bold'>MADE BY USING REDUCER</h1>
            <div>Count is {count}</div>
            <button onClick={()=>set('increment')}>Increment</button><br/><br/>
            <button onClick={()=>set('decrement')}>decrement</button><br/><br/>
            <button onClick={()=>set('reset')}>Reset</button>
        </div>
    )
}