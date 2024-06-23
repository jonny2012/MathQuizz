


export default function Rating({corectCount, wrongCount}){



    return(

        <div className="rating">
            <h3 className="animate">Correct: {corectCount}</h3>
            <h3>Wrong: {wrongCount}</h3>

        </div>

    )
}