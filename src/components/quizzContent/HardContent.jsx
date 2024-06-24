import style from "./easy.module.css"
import { useState } from "react"

export default function HardContent({setCorectCount, setWrongCount, setTestsCount}){
    const [firstNumber, SetFirstNumber] = useState(Math.floor(Math.random() * (30 - 7) + 1))
    const [secondNumber, SetSecondNumber] = useState(Math.floor(Math.random() * (20 - 5) + 5))
    const [thirdNumber, SetThirdNumber] = useState(Math.floor(Math.random() * (30- 1) + 1))
    const [fourthNumber, setFourthNumber] = useState(Math.floor(Math.random() * (7 - 1) + 1))
    const [corectCount, setCorectCountMedium] = useState(0)
    const [wrongcount, setWrong] = useState(0)
    const [TestsCount, setTestsCountEasy] = useState(0)
    let result = 0
     result= ((firstNumber + secondNumber -thirdNumber) * fourthNumber)

    function checkResult() {
        const input = document.querySelector("#input")
        const box = document.querySelector(".box")
        const corect = document.createElement("div")
        corect.className = "block correct"
        const wrong = document.createElement("div")
        wrong.className = "block wrong"

        if (result === Number(input.value)) {
            box.appendChild(corect)
       setCorectCountMedium(corectCount + 1)
            setCorectCount( corectCount + 1)
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
        SetFirstNumber(Math.floor(Math.random() * (30 - 7) + 7))
        SetSecondNumber(Math.floor(Math.random() * (20 - 5) + 5))
        SetThirdNumber(Math.floor(Math.random() * (30 - 1) + 1))
        setFourthNumber(Math.floor(Math.random() * (7 - 1) + 1))
        input.value = ''
        input.focus()
        setTestsCountEasy(() => TestsCount + 1)
        setTestsCount(() => TestsCount + 1)
    }

    return(
        <div className={style.content}>
    
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>(</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{firstNumber}</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>+</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{secondNumber}</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>-</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{thirdNumber}</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>)</span>
        <span style={{ fontSize: "70px", color: "#72f4f4", paddingTop:"15px" }}>*</span>
        <span style={{ fontSize: "70px", color: "#72f4f4" }}>{fourthNumber}</span>
        

        <span style={{ fontSize: "70px", color: "#72f4f4" }}>=</span>
        <input onKeyDown={(e) => { if (e.key === "Enter") ChangeRandomNumber() }} id="input" className={style.input} type="number" maxLength={4} />
        <button className={style.btn} onClick={ChangeRandomNumber}> Next</button>
    </div>
    )
}