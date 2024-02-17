import "../styles/Hourglass.css";
import { convertFromSeconds } from "../timeConverter";
import { getHourglassHeight } from "../watchPositioner";

export default function Hourglass({time, timeTarget})
{
    const sandHeight = getHourglassHeight(time, timeTarget);
    return (
        <div role="timer" className="hg-container">
            <div data-testid="hourglassTop" className="hg-common hg-top">
                <div style={{transform: `scaleY(${sandHeight.top}%)`}} data-testid="sandTop" className="hg-inner">

                </div>
            </div>
            <p data-testid="time" className="hg-time" >{convertFromSeconds(time).join(":")}</p>
            <div data-testid="hourglassBottom" className="hg-common hg-bottom">
                <div style={{transform: `scaleY(${sandHeight.bottom}%)`}} data-testid="sandBottom" className="hg-inner">

                </div>
            </div>
        </div>
    )
}