import {ContextConsumer} from "./context";
import {D} from './d'
export function E (){
    return (
        <userConsumer>
<ContextConsumer>
    {
        (user)=> {
              return (
                  <div>Hello {user}</div>

              )
        }
    }
</ContextConsumer>
        </userConsumer>
    )
}