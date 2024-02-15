import "../styles/Stopwatch.css";
import Watch from "./Watch";
import RegularButton from "./RegularButton";
import { iconBarrel } from "../iconBarrel";
import LapsList from "./LapsList";
import { convertFromCS } from "../timeConverter";

export default function Stopwatch({time, paused, laps, addLap, togglePause, reset})
{
    return (
        <div className="stopwatch">
            <div className="watch">
                <Watch
                    time={time}
                    />
            </div>
            <div className="stopwatch-controls">
                <RegularButton
                    danger={false}
                    iconPath={paused ? iconBarrel.start : iconBarrel.pause}
                    text={paused ? time > 0 ? "Resume" : "Start" : "Pause"}
                    onClick={togglePause}
                />
                {
                    time > 0 &&
                    <RegularButton
                        danger={false}
                        iconPath={iconBarrel.lap}
                        text={"Lap"}
                        onClick={() => addLap(convertFromCS(time).join(":"))}
                    />
                }
                {
                    time > 0 &&
                    <RegularButton
                        danger={true}
                        iconPath={iconBarrel.reset}
                        text={"Reset"}
                        onClick={reset}
                    />
                }
            </div>
            <LapsList
                laps={laps}
            />
        </div>
    )
}