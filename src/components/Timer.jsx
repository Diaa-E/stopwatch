import "../styles/Timer.css";
import { iconBarrel } from "../iconBarrel";
import TimerSetter from "./TimerSetter";
import Hourglass from "./Hourglass";
import { useState } from "react";
import { convertFromSeconds } from "../timeConverter";

export default function Timer({time, paused, startTimer, editMode})
{
    return (
        <div className="timer">
        {
            editMode &&
            <TimerSetter
                formattedTime={convertFromSeconds(time)}
                startTimer={startTimer}
            />
        }
        {
            !editMode &&
            <Hourglass
                time={time}
            />
        }
        </div>
    )
}