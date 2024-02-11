export function convertFromCS(totalCentiseconds)
{
    const centiseconds = totalCentiseconds % 100;
    const seconds = Math.floor(totalCentiseconds / 100) % 60;
    const minutes = Math.floor(totalCentiseconds / (100 * 60)) % 60;
    const hours = Math.floor(totalCentiseconds / (100 * 60 * 60));

    return [
        `${hours < 10 ? "0" + hours : hours}`,
        `${minutes < 10 ? "0" + minutes : minutes}`,
        `${seconds < 10 ? "0" + seconds : seconds}.${centiseconds < 10 ? "0" + centiseconds : centiseconds}`
    ]
}

export function convertToCS(formattedTime)
{
    const timeArray = formattedTime.split(":");
    
    return ((+timeArray[0] * 60 * 60) + (+timeArray[1] * 60) + (+timeArray[2])) * 100;
}