import { User} from "./c";
import {useContext} from "react";

export function D (){
    const UseName = useContext(User);
    return (
        <div>
            {UseName}
        </div>
    )
}