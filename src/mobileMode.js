export function toggleMobileMode(mobileModeSetter)
{
    window.addEventListener("resize", () => {

        mobileModeSetter(isSmallScreen());
    });
}

export function isSmallScreen()
{
    return window.innerWidth <= 700;
}