import "../styles/TabButton.css";

export default function TabButton({active, text, iconPath, onClick})
{
    return (
        <>
            <button className={`tab-button ${active ? "active" : ""}`} onClick={onClick} role="tab">
                <img src={iconPath} alt={`${text}'s tab icon`}/>
                {text}
            </button>
        </>
    )
}