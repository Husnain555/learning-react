//         // first method

// export function Hell(props){
//     return(
//         <div>
//             <h1>First Name :{props.name}</h1>
//             <h2>Last Name:{props.lastname}</h2>
//             <h3>Age:{props.age}</h3>
//
//         </div>
//     )
// }
//Second Method

// export function Hell (props){
//     const {name,lastname,age} = props
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h2>{lastname}</h2>
//             <h3>{age}</h3>
//         </div>
//     )
// }
//Third Method
// export function Hell (name,lastname,age) {
//     return(
//         <div>
//             <h1>{name}</h1>
//             <h1>{lastname}</h1>
//             <h1>{age}</h1>
//         </div>
//     )
// }
import {useContext} from "react";
import {Props} from "../Contaxt-api/c";

export function Zamna11(){
    const Zaman = useContext(Props)

    return (
        <div>Hello bhi {Zaman}</div>
    )
}