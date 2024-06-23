
import "./levelbtns.css"



function HardityButtons({onChange,id,active,title }){

 function clickHandler(keyid){
onChange(keyid)

 }   



    return(
   
<button className={active === id ? "btn active": "btn" }
 onClick={()=>clickHandler(id)}  >{title}</button>
    
    )
}

export default HardityButtons