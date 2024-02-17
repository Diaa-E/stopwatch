import "../styles/Timer.css";
import { iconBarrel } from "../iconBarrel";
import TimerSetter from "./TimerSetter";
import Hourglass from "./Hourglass";
import { convertFromSeconds } from "../timeConverter";
import RegularButton from "./RegularButton";

export default function Timer({time, timeTarget, paused, startTimer, editMode, togglePause, cancelTimer})
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
            <>
                <Hourglass
                    time={time}
                    timeTarget={timeTarget}
                />
                <div className="timer-controls">
                    <RegularButton
                        danger={false}
                        iconPath={paused? iconBarrel.start : iconBarrel.pause}
                        text={paused ? "Resume" : "Pause"}
                        onClick={togglePause}
                        type="button"
                    />
                    <RegularButton
                        danger={true}
                        iconPath={iconBarrel.cancel}
                        text={"Cancel"}
                        onClick={cancelTimer}
                        type="button"
                    />
                </div>
            </>
        }
        </div>
    )
}