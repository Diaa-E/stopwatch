import "../styles/TimerSetter.css";
import { useState } from "react";
import RegularButton from "./RegularButton";
import { convertToDoubleDigit, convertToSeconds } from "../timeConverter";
import { iconBarrel } from "../iconBarrel";

export default function TimerSetter({formattedTime, startTimer})
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

    function removeExtraDigit(value)
    {
        if (value.length > 2) return value.substring(0, 2);
        return value;
    }

    return (
            <div data-testid="timer-setter-form" className="timer-setter-form">
                <div className="timer-setter">
                    <input
                        className="timer-setter-field"
                        id="hours"
                        onChange={e => setHrs(removeExtraDigit(e.target.value))}
                        onBlur={e => setHrs(correctValue(e, 99))}
                        role="input"
                        type="number"
                        value={hrs}
                        data-testid="hours"
                        onClick={e => e.target.select()}
                    />
                    <input
                        className="timer-setter-field"
                        id="minutes"
                        onChange={e => setMins(removeExtraDigit(e.target.value))}
                        onBlur={e => setMins(correctValue(e, 59))}
                        role="input"
                        type="number"
                        value={mins}
                        data-testid="minutes"
                        onClick={e => e.target.select()}
                    />
                    <input
                        className="timer-setter-field"
                        id="seconds"
                        onChange={e => setSecs(removeExtraDigit(e.target.value))}
                        onBlur={e => setSecs(correctValue(e, 59))}
                        role="input"
                        type="number"
                        value={secs}
                        data-testid="seconds"
                        onClick={e => e.target.select()}
                    />
                </div>
                    <RegularButton
                        text={"Start"}
                        iconPath={iconBarrel.start}
                        danger={false}
                        onClick={() => startTimer(convertToSeconds([hrs, mins, secs].join(":")))}
                        type="button"
                    />
            </div>
    )
}