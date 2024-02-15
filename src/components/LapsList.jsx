import "../styles/LapsList.css";

export default function LapsList({laps})
{
    return (
        <ol className="laps-list">
            {
                laps.map((lap, index) => {
                    
                    return (
                        <li className="lap-row" key={lap.id}>
                            <p className="lap-index">{laps.length - index}.</p>
                            <p className="lap">{lap.value}</p>
                        </li>
                    )
                })
            }
        </ol>
    )
}