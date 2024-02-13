import TabButton from "./TabButton";
import { iconBarrel } from "../iconBarrel";
import { tabs } from "../tabs";

export default function NavBar({changeActiveTab, darkMode, toggleDarkMode})
{
    return (
        <>  
            <nav className="nav-bar">
                <TabButton
                    iconPath={iconBarrel.stopwatch}
                    text={"Stopwatch"}
                    onClick={() => changeActiveTab(tabs.stopwatch)}
                />
                <TabButton
                    iconPath={iconBarrel.timer}
                    text={"Timer"}
                    onClick={() => changeActiveTab(tabs.timer)}
                />
                <TabButton
                    iconPath={darkMode ? iconBarrel.light : iconBarrel.dark}
                    text={darkMode ? "Light" : "Dark"}
                    onClick={toggleDarkMode}
                />
                <TabButton
                    iconPath={iconBarrel.about}
                    text={"About"}
                    onClick={() => changeActiveTab(tabs.about)}
                />
            </nav>
        </>
    )
}