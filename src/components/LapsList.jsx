export default function LapsList({laps})
{
    return (
        <ol>
            {
                laps.map((lap, index) => {
                    
                    return (
                        <li key={lap.id}>
                            <p>{laps.length - index}.</p>
                            <p>{lap.value}</p>
                        </li>
                    )
                })
            }
        </ol>
    )
}