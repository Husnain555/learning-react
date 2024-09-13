import React from "react";

export function High (){
    return (
        <div>
            <h1>HOC</h1>
            <HOC cmp={Counter()}/>
        </div>

    )
}

function HOC (props){
    return (
        <h2>{props.cmp}</h2>
    )
}
function Counter(){
    const [count , setCount] = React.useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click me {count}</button>
        </div>
    )
}

