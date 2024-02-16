import "../styles/Timer.css";
import { iconBarrel } from "../iconBarrel";
import TimerSetter from "./TimerSetter";
import Hourglass from "./Hourglass";
import { useState } from "react";
import { convertFromSeconds } from "../timeConverter";

export default function Timer({time, paused, startTimer})
{
    return (
        <div className="timer">
        {
            paused &&
            <TimerSetter
                formattedTime={convertFromSeconds(time)}
                onSubmit={startTimer}
            />
        }
        {
            !paused &&
            <Hourglass
                time={time}
            />
        }
        </div>
    )
}