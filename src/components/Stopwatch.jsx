import "../styles/Stopwatch.css";
import Watch from "./Watch"

export default function Stopwatch({time})
{
    return (
        <div className="stopwatch">
            <Watch
                time={time}
            />
        </div>
    )
}