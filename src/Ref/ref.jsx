import React, {useRef} from 'react';
export function Ref (){
    const hell = (e)=>{
        console.log('focus')
    }

    return(
        <div>
            <lable>User Name:
            <input type={"text"} name={"userName"} onFocus={hell}/>
            </lable>
        </div>
    )
}