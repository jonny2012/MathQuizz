import { useState } from "react"
import "./buttons.css"
import { Link } from "react-router-dom"
import HardityButtons from "./HardityButtons"



function StartButtons ({ onClick }) {
const [active, setActive] = useState()


    const levels = [
        {
            hardity: "Easy",
            id:0
        },
        {
            hardity:"Medium",
            id:1
        },
        {
            hardity:"Hard",
            id:2
        }

    ]

   function Activebtn(value){
        setActive(()=>value)
        onClick( value)
    }

console.log(active)
    return (
        <div className="container">
            <Link className="link" to="/quizz"> <button className="start_btn" disabled={active === levels.id ? true:false}> Start </button> </Link>
            <div className="types_play">
            {
                levels.map((level,i) =>(
                    
                    <HardityButtons key={i} active={active} id ={level.id} onChange={Activebtn} disabled={active} title={level.hardity}/>
                   
                ))

            }

        
   
     

            </div>

        </div>
    )
}
export default  StartButtons