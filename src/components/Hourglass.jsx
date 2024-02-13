import { convertFromSeconds } from "../timeConverter"

export default function Hourglass({time, timeTarget})
{
    return (
        <div role="timer">
            <div data-testid="hourglassTop" className="hg-top">
                <div data-testid="sandTop" className="hg-inner">

                </div>
            </div>
            <p data-testid="time" >{convertFromSeconds(time).join(":")}</p>
            <div data-testid="hourglassBottom" className="hg-bottom">
                <div data-testid="sandBottom" className="hg-inner">

                </div>
            </div>
        </div>
    )
}