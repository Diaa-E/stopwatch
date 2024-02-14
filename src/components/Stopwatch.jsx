import "../styles/Stopwatch.css";
import Watch from "./Watch";
import RegularButton from "./RegularButton";
import { iconBarrel } from "../iconBarrel";

export default function Stopwatch({time, paused, togglePause})
{
    return (
        <>
            <div className="stopwatch">
                <Watch
                    time={time}
                    />
            </div>
            <div className="stopwatch-controls">
                <RegularButton
                    danger={false}
                    iconPath={paused ? iconBarrel.start : iconBarrel.pause}
                    text={paused ? "Start" : "Pause"}
                    onClick={togglePause}
                />
                {
                    time > 0 &&
                    <RegularButton
                        danger={false}
                        iconPath={iconBarrel.lap}
                        text={"Lap"}
                        onClick={() => {}}
                    />
                }
                {
                    time > 0 &&
                    <RegularButton
                        danger={true}
                        iconPath={iconBarrel.reset}
                        text={"Reset"}
                        onClick={() => {}}
                    />
                }
            </div>
        </>
    )
}