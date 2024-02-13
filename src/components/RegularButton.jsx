export default function RegularButton({text, iconPath, danger, onClick, type = "button"})
{
    return (
        <button role={type} type={type} onClick={onClick} className={`${danger ? "button-danger" : ""}`}>
            <img src={iconPath} alt={`${text} button icon`} />
            {text}
        </button>
    )
}