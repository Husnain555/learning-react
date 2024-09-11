import {useState} from "react";

export function ClickEvents(props) {
    const [count, setCount] = useState(0)

    function click12(){
        setCount(count + 1)
    }
    function click13(){
        setCount(count - 1)

    }

    return (
        <div>
            {count}
            <button onClick={click12}>increase</button>
            <button onClick={click13}>Decrease</button>
        </div>
    )
}