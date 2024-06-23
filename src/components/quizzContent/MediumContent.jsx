import style from "./easy.module.css"
import { useState } from "react"



export default function MediumContent({setCorectCount, setWrongCount, setTestsCount,wrongcountM, change}){
    const [FirstNumber, SetFirstNumber] = useState(Math.floor(Math.random() * (30 - 1) + 1))
    const [SecondNumber, SetSecondNumber] = useState(Math.floor(Math.random() * (30 - 1) + 1))
    const [ThirdNumber, SetThirdNumber] = useState(Math.floor(Math.random() * (20 - 1) + 1))
    const [CorectCount, setCorectCountMedium] = useState(0)
    const [wrongcount, setWrong] = useState(0)
    const [TestsCount, setTestsCountEasy] = useState(0)
    let result = 0
     result= FirstNumber + SecondNumber - ThirdNumber

    function checkResult() {
        const input = document.querySelector("#input")
        const box = document.querySelector(".box")
        const corect = document.createElement("div")
        corect.className = "block correct"
        const wrong = document.createElement("div")
        wrong.className = "block wrong"

        if (result === Number(input.value)) {
            box.appendChild(corect)
       setCorectCountMedium(CorectCount + 1)
            setCorectCount( CorectCount + 1)
        }
   
        else if(!input.value) {
 
               box.appendChild(wrong)
                setWrong(()=> wrongcount +1)
            setWrongCount( wrongcount + 1)
          
        }
    }
    function ChangeRandomNumber() {
        checkResult()
        const input = document.querySelector("#input")
        SetFirstNumber(Math.floor(Math.random() * (30 - 1) + 1))
        SetSecondNumber(Math.floor(Math.random() * (30 - 1) + 1))
        SetThirdNumber(Math.floor(Math.random() * (30 - 1) + 1))
        input.value = ''
        input.focus()
        setTestsCountEasy(() => TestsCount + 1)
        setTestsCount(() => TestsCount + 1)
    }

    return(
        <div className={style.content}>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{FirstNumber}</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>+</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{SecondNumber}</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>-</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{ThirdNumber}</span>

        <span style={{ fontSize: "70px", color: "#72f4f4" }}>=</span>
        <input onKeyDown={(e) => { if (e.key === "Enter") ChangeRandomNumber() }} id="input" className={style.input} type="number" />
        <button className={style.btn} onClick={ChangeRandomNumber}> Next</button>
    </div>
    )
}