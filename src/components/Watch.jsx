import "../styles/Watch.css";

import { convertFromCS } from "../timeConverter";
import { getHandAngle } from "../watchPositioner";

export default function Watch({time})
{
    const markers = [];
    const handAngle = getHandAngle(time, 60 * 60 * 100);

    for (let i = 0; i < 60; i++)
    {
        markers.push(<div 
                        key={i}
                        data-testid="marker"
                        className={`marker ${handAngle > (i * 1 / 60) ? "passed" : ""}`}
                        style={{transform: ` rotateZ(${i * 6}deg) translateY(-170px)`}}
                    ></div>)
    }

    return (
        <div role="timer">
            {
                markers
            }
            <div
                data-testid="hand"
                className="hand"
                style={{transform: ` rotateZ(${handAngle}turn) translateY(-185px)`}}
            ></div>
            <p className="watch-time" data-testid="time ">{convertFromCS(time).join(":")}</p>
        </div>
    )
}