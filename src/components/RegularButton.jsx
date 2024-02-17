import "../styles/RegularButton.css";

export default function RegularButton({text, iconPath, danger, onClick, type = "button", mobileMode})
{
    return (
        <button role={type} type={type} onClick={onClick} className={`button ${danger ? "button-danger" : ""}`}>
            <img src={iconPath} alt={`${text} button icon`} />
            {
                mobileMode ? "" : text
            }
        </button>
    )
}