import C from './c'
import {E} from "./e";
import {ContextConsumer} from "./context";
export function D (){
    return (
        <div>
            <ContextConsumer>
                {
                    (name)=>{
                        return (
                            <div>
                                hello i'm from d {name}
                            </div>
                        )
                    }
                }
            </ContextConsumer>
            <E/>

        </div>
    )
}