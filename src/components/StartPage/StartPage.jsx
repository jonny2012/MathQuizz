import style from "./startpage.module.css"
import StartButtons from "./Startbuttons"
import { useState } from "react"


 export default function StartPage({onClick}){
    const [activebutton, setActiveButton] = useState(undefined)


    function handleClick(value){
        setActiveButton(()=>value)
      onClick(value)
    }


    return(
        <div className={style.main}>
  <h1 className={style.logo}>Ma<span style={{ color: "#dad72c" }}>th</span>Qui<span style={{ color: "#dad72c" }}>zz</span></h1>
        <StartButtons onClick={handleClick}/>
        </div>
    )
 }