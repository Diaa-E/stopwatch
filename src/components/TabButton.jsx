import "../styles/TabButton.css";

export default function TabButton({active, text, iconPath, onClick, mobileMode})
{
    return (
        <>
            <button className={`tab-button ${active ? "active" : ""}`} onClick={onClick} role="tab">
                <img src={iconPath} alt={`${text}'s tab icon`}/>
                {
                    mobileMode ? "" : text
                }
            </button>
        </>
    )
}