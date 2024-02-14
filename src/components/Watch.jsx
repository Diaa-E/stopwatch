import "../styles/Watch.css";

import { convertFromCS } from "../timeConverter";

export default function Watch({time})
{
    const markers = [];

    for (let i = 0; i < 60; i++)
    {
        markers.push(<div 
                        key={i}
                        data-testid="marker"
                        className="marker"
                        style={{transform: ` rotateZ(${i * 6}deg) translateX(170px)`}}
                    ></div>)
    }

    return (
        <div role="timer">
            {
                markers
            }
            <div data-testid="hand" className="hand"></div>
            <p className="watch-time" data-testid="time ">{convertFromCS(time).join(":")}</p>
        </div>
    )
}