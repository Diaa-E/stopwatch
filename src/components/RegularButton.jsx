export default function RegularButton({text, iconPath, danger, onClick})
{
    return (
        <button onClick={onClick} className={`${danger ? "button-danger" : ""}`}>
            <img src={iconPath} alt={`${text} button icon`} />
            {text}
        </button>
    )
}