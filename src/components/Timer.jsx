import "../styles/Timer.css";
import { iconBarrel } from "../iconBarrel";
import TimerSetter from "./TimerSetter";
import Hourglass from "./Hourglass";
import { useState } from "react";
import { convertFromSeconds } from "../timeConverter";

export default function Timer({time, paused})
{
    const [editMode, setEditMode] = useState(true);

    return (
        <div className="timer">
        {
            editMode &&
            <TimerSetter
                formattedTime={convertFromSeconds(time)}
                onSubmit={() => {}}
            />
        }
        </div>
    )
}