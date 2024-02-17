import TabButton from "./TabButton";
import { iconBarrel } from "../iconBarrel";
import { tabs } from "../tabs";
import "../styles/NavBar.css";

export default function NavBar({activeTab, changeActiveTab, darkMode, toggleDarkMode, mobileMode})
{
    return (
        <>  
            <nav className="nav-bar">
                <TabButton
                    iconPath={iconBarrel.stopwatch}
                    text={"Stopwatch"}
                    onClick={() => changeActiveTab(tabs.stopwatch)}
                    active={activeTab === tabs.stopwatch}
                    mobileMode={mobileMode}
                />
                <TabButton
                    iconPath={iconBarrel.timer}
                    text={"Timer"}
                    onClick={() => changeActiveTab(tabs.timer)}
                    active={activeTab === tabs.timer}
                    mobileMode={mobileMode}
                />
                <TabButton
                    iconPath={darkMode ? iconBarrel.light : iconBarrel.dark}
                    text={darkMode ? "Light" : "Dark"}
                    onClick={toggleDarkMode}
                    mobileMode={mobileMode}
                />
                <TabButton
                    iconPath={iconBarrel.about}
                    text={"About"}
                    onClick={() => changeActiveTab(tabs.about)}
                    active={activeTab === tabs.about}
                    mobileMode={mobileMode}
                />
            </nav>
        </>
    )
}