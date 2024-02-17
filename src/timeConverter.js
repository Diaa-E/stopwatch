export function convertFromCS(totalCentiseconds, round = false)
{
    const centiseconds = totalCentiseconds % 100;
    const seconds = Math.floor(totalCentiseconds / 100) % 60;
    const minutes = Math.floor(totalCentiseconds / (100 * 60)) % 60;
    const hours = Math.floor(totalCentiseconds / (100 * 60 * 60));

    return [
        convertToDoubleDigit(hours),
        convertToDoubleDigit(minutes),
        `${convertToDoubleDigit(seconds)}${round ? "" : "." + convertToDoubleDigit(centiseconds)}`
    ]
}

export function convertFromSeconds(totalSeconds)
{
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / (60 * 60));

    return [
        convertToDoubleDigit(hours),
        convertToDoubleDigit(minutes),
        convertToDoubleDigit(seconds)
    ]
}

export function convertToSeconds(formattedTime)
{
    const timeArray = formattedTime.split(":");

    return ((+timeArray[0] * 60 * 60) + (+timeArray[1] * 60) + (+timeArray[2]));
}

export function convertToCS(formattedTime)
{
    const timeArray = formattedTime.split(":");
    
    return ((+timeArray[0] * 60 * 60) + (+timeArray[1] * 60) + (+timeArray[2])) * 100;
}

export function convertToDoubleDigit(value, upperLimit = 99)
{
    if (+value > upperLimit) return upperLimit.toString();
    if (+value <= 0 || value === "") return "00";
    return `${+value < 10 ? ("0" + +value).toString() : value.toString()}`;
}