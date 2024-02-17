export function getHandAngle(csCurrent, csCycle)
{
    return (csCurrent % csCycle) / csCycle;
}

export function getHourglassHeight(secCurrent, secMax)
{
    return {bottom: 100 - (secCurrent / secMax) * 100, top: ((secCurrent / secMax) * 100)}
}