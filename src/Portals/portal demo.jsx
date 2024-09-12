import {createPortal} from "react-dom";
import {useState} from "react";

export function Portal (){
    const [open, setOpen] = useState(false)


    return(
        <div>
            <button onClick={()=>setOpen(!open)}>{open ? 'Hide' : 'show'}</button>
            {open && <Nav/>}
        </div>
    )



}
const Nav = ()=>{
    return (
        <>
        {createPortal(
            <div className='flex flex-col  justify-items-start '>
                <a href={'/'}>Home</a>
                <a href={'/'}>about</a>
                <a href={'/'}>Contact</a>
            </div>,document.getElementById('portal')
        )}</>


    )
}


