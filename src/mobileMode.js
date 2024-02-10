export function toggleMobileMode(mobileModeSetter)
{
    window.addEventListener("resize", () => {

        mobileModeSetter(window.innerWidth <= 700);
    });
}