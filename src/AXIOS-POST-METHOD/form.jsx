import axios from "axios";
import {useEffect, useState} from "react";

export function Form1 (props) {
    const [val,setVal] =useState({title:'',price:'',description:''})
    async function submit (){
        const responce = await axios.post('https://fakestoreapi.com/products ',JSON.stringify(val))
        console.log(responce.data)
        setVal(responce.data)

    }

    return (
        <div className="flex flex-wrap flex-col justify-center text-center items-center gap-3">
            <label> title :
                <input onChange={(e)=>setVal({...val,title: e.target.value})} className='border-2 font-bold' type="text"  name="username"/>
            </label>
            <label> price :
                <input onChange={(e)=>setVal({...val,price: e.target.value})} className='border-2 font-bold' type={"number"} name="number"/>
            </label>
            <label> description :
                <input onChange={(e)=>setVal({...val,description: e.target.value})} className='border-2 font-bold' type={"text"} name="description"/>
            </label>
            <button onClick={submit} className='border-2 '>Submit</button>
        </div>

    )
}