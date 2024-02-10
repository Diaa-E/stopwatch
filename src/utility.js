export function toggleDeviceMode(mobileModeSetter)
{
    window.addEventListener("resize", () => {

        window.innerWidth <= 700? mobileModeSetter(true) : mobileModeSetter(false);
    });
}