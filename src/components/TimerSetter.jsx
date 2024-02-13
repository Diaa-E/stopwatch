import { useState } from "react";
import RegularButton from "./RegularButton";

export default function TimerSetter({formattedTime, onSubmit})
{
    const [hrs, setHrs] = useState(formattedTime.split(":")[0]);
    const [mins, setMins] = useState(formattedTime.split(":")[1]);
    const [secs, setSecs] = useState(formattedTime.split(":")[2]);

    return (
        <form onSubmit={onSubmit} role="form" action="">
            <div>
                <input
                    id="hours"
                    maxLength={2}
                    onChange={e => setHrs(e.target.value)}
                    role="input"
                    type="number"
                    value={hrs}
                    data-testid="hours"
                />
                <input
                    id="minutes"
                    maxLength={2}
                    onChange={e => setMins(e.target.value)}
                    role="input"
                    type="number"
                    value={mins}
                    data-testid="minutes"
                />
                <input
                    id="seconds"
                    maxLength={2}
                    onChange={e => setSecs(e.target.value)}
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