import "../styles/TimerSetter.css";
import { useState } from "react";
import RegularButton from "./RegularButton";
import { convertToDoubleDigit } from "../timeConverter";
import { iconBarrel } from "../iconBarrel";

export default function TimerSetter({formattedTime, onSubmit})
{
    const [hrs, setHrs] = useState(formattedTime[0]);
    const [mins, setMins] = useState(formattedTime[1]);
    const [secs, setSecs] = useState(formattedTime[2]);

    function correctValue(e, upperLimit)
    {
        if (+e.target.value > upperLimit) return upperLimit;
        if (+e.target.value < 0 || e.target.value === "" || +e.target.value === 0) return "00";
        return convertToDoubleDigit(e.target.value);
    }

    return (
        <form className="timer-setter-form" onSubmit={onSubmit} role="form" action="">
            <div className="timer-setter">
                <input
                    className="timer-setter-field"
                    id="hours"
                    onChange={e => setHrs(e.target.value)}
                    onBlur={e => setHrs(correctValue(e, 99))}
                    role="input"
                    type="number"
                    value={hrs}
                    data-testid="hours"
                />
                <input
                    className="timer-setter-field"
                    id="minutes"
                    onChange={e => setMins(e.target.value)}
                    onBlur={e => setMins(correctValue(e, 59))}
                    role="input"
                    type="number"
                    value={mins}
                    data-testid="minutes"
                />
                <input
                    className="timer-setter-field"
                    id="seconds"
                    onChange={e => setSecs(e.target.value)}
                    onBlur={e => setSecs(correctValue(e, 59))}
                    role="input"
                    type="number"
                    value={secs}
                    data-testid="seconds"
                />
            </div>
                <RegularButton
                    text={"Start"}
                    iconPath={iconBarrel.start}
                    danger={false}
                    onClick={() => {}}
                    type="submit"
                />
        </form>
    )
}