import "../styles/TabButton.css";

export default function TabButton({text, iconPath, onClick})
{
    return (
        <>
            <button className="tab-button" onClick={onClick} role="tab">
                <img src={iconPath} alt={`${text}'s tab icon`}/>
                {text}
            </button>
        </>
    )
}