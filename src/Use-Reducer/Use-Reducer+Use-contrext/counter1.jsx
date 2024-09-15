import {Counter11} from "./reducer-context";
import {useContext} from "react";
export function Counter (){
    const user = useContext(Counter11);

    return (
        <div>
            <button onClick={() => user.countDispatch('increment')}>Increment</button>
            <br/><br/>
            <button onClick={() => user.countDispatch('decrement')}>decrement</button>
            <br/><br/>
            <button onClick={() => user.countDispatch('reset')}>Reset</button>
        </div>
    )
}