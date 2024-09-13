import axios from "axios";
import {useEffect, useState} from "react";
import {Card11} from "./Card";
export function Axios11() {
   const [val,setval] = useState([])
    async function hell (){
        const responce = await axios.get('https://fakestoreapi.com/products')
        console.log(responce.data)
        setval(responce.data)

    }

    useEffect(() => {
        hell();
    }, []);
   return (
       


       val.map((item11)=>{
       return(
           <Card11  title={item11.title} image={item11.image} description={item11.description} price={item11.price} key={item11.id} id={item11.id} />
       )
   })
   )

}
