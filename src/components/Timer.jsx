import "../styles/Timer.css";
import { iconBarrel } from "../iconBarrel";
import TimerSetter from "./TimerSetter";
import Hourglass from "./Hourglass";
import { convertFromCS } from "../timeConverter";
import RegularButton from "./RegularButton";

export default function Timer({time, timeTarget, paused, startTimer, editMode, togglePause, cancelTimer, mobileMode})
{
    return (
        <div className="timer">
        {
            editMode &&
            <TimerSetter
                formattedTime={convertFromCS(time, true)}
                startTimer={startTimer}
                mobileMode={mobileMode}
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
                        mobileMode={mobileMode}
                    />
                    <RegularButton
                        danger={true}
                        iconPath={iconBarrel.cancel}
                        text={"Cancel"}
                        onClick={cancelTimer}
                        type="button"
                        mobileMode={mobileMode}
                    />
                </div>
            </>
        }
        </div>
    )
}