export function getHandAngle(csCurrent, csCycle)
{
    return csCurrent / csCycle;
}

export function getHourglassHeight(secCurrent, secMax)
{
    return {bottom: (secCurrent / secMax) * 100, top: 100 - ((secCurrent / secMax) * 100)}
}