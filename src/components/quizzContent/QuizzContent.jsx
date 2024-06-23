import style from "./content.module.css"
import { useState } from "react"
import Answers from "../Answers/Answers"
import React from "react"
import Rating from "../Rating"
import Timer from "../Timer"
import EasyContent from "./EasyContent"
import MediumContent from "./MediumContent"
import HardContent from "./HardContent"
import { Context } from "./context"
import { useContext } from "react"


export default function QuizzContent({ hardity }) {
    const [change, setChange] = useState(0)
    const [corectCount, setCorectCount] = useState(0)
    const [wrongCount, setWrongCount] = useState(0)
    const [testsCount, setTestsCount] = useState(0)


    const minute = 2
    const seconds = 0


    return (

        <div className={style.quizzcontent}>
            <Answers />
            <Rating corectCount={corectCount} wrongCount={wrongCount} />
            <div className={style.content}>
                {hardity === 0 ?
                    <EasyContent
                        setCorectCount={setCorectCount}
                        setWrongCount={setWrongCount}
                        setTestsCount={setTestsCount}
                        change={setChange} />
                    : hardity === 1 ?
                        <MediumContent
                            setCorectCount={setCorectCount}
                            setWrongCount={setWrongCount}
                            setTestsCount={setTestsCount} c
                            change={setChange} />
                        :
                        <HardContent
                            setCorectCount={setCorectCount}
                            setWrongCount={setWrongCount}
                            setTestsCount={setTestsCount} c
                            change={setChange} />
                }

            </div>
            <Context.Provider value={{ wrongCount, corectCount }}>
                <Timer initialMinute={minute} initialSeconds={seconds} />
            </Context.Provider>
        </div>

    )
}