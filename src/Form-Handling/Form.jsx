import {useEffect, useState} from "react";

export function Form (){
    const [val, setVal] = useState({item1:'', item2:'',item3:''});
    function hello(){
        console.log(val)
    }


    return (
        // eslint-disable-next-line no-undef
        <form>
            <div className='flex flex-col justify-center text-center'>
                <label>User Name :
                <input name="username" onChange={(e)=>setVal({...val,item1: e.target.value})}type="text" />
                </label>
                <label>Password :
                <input onChange={(e)=>setVal({...val,item2: e.target.value})  }name="password" type="password" />
                </label>
                <label>Email:
                <input onChange={(e)=>setVal({...val,item3:e.target.value})} name="email" type="email" />
                </label>
                <button onClick={hello}  type="button">Submit</button>
            </div>
        </form>
    )
}
