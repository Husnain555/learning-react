import {useContext} from "react";
import {brother} from "./c";

export function E (){
    const Brother = useContext(brother)
    return (
        <div>Hello iam from e {Brother} </div>
    )
}