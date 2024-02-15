import { useState } from "react";
import RegularButton from "./RegularButton";
import { convertToDoubleDigit } from "../timeConverter";

export default function TimerSetter({formattedTime, onSubmit})
{
    const [hrs, setHrs] = useState(formattedTime[0]);
    const [mins, setMins] = useState(formattedTime[1]);
    const [secs, setSecs] = useState(formattedTime[2]);

    function correctValue(e, upperLimit)
    {
        if (+e.target.value > upperLimit) return upperLimit;
        if (+e.target.value < 0 || e.target.value === "") return "00";
        return convertToDoubleDigit(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} role="form" action="">
            <div>
                <input
                    id="hours"
                    onChange={e => setHrs(e.target.value)}
                    onBlur={e => setHrs(correctValue(e, 99))}
                    role="input"
                    type="number"
                    value={hrs}
                    data-testid="hours"
                />
                <input
                    id="minutes"
                    onChange={e => setMins(e.target.value)}
                    onBlur={e => setMins(correctValue(e, 59))}
                    role="input"
                    type="number"
                    value={mins}
                    data-testid="minutes"
                />
                <input
                    id="seconds"
                    onChange={e => setSecs(e.target.value)}
                    onBlur={e => setSecs(correctValue(e, 59))}
                    role="input"
                    type="number"
                    value={secs}
                    data-testid="seconds"
                />
                <RegularButton
                    text={"Start"}
                    iconPath={""}
                    danger={false}
                    onClick={() => {}}
                    type="submit"
                />
            </div>
        </form>
    )
}