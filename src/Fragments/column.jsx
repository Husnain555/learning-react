import {Fragment} from "react";

export function Column (){
    return (
        <>
                <td>Husnain</td>
                <td>babar</td>
</>
    )
}

//in console, we are having error because we cant use div on a td tag
//but div was also necessary because we are rendering multiple elements
//so because of this we need to use fragments in column section
//we can also use empty '<></>' div tag but this won't allow us key attribute
//definition
//fragments allow us to use group of children without adding extra node in DOM component