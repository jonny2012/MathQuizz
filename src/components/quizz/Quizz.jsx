import style from "./quizz.module.css"
import QuizzContent from "../quizzContent/QuizzContent"
import { Link } from "react-router-dom"


export default function Quizz({hardity}) {

    return (
        <div className={style.main}>
            <Link className={style.start_link} to="/">
            <h1 className={style.logo}>Ma<span style={{ color: "#dad72c" }}>th</span>Qui<span style={{ color: "#dad72c" }}>zz</span></h1>
            </Link>

            <QuizzContent hardity={hardity}  />

        </div>
    )
}