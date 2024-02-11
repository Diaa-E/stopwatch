export default function RegularButton({text, iconPath, danger})
{
    return (
        <button className={`${danger ? "button-danger" : ""}`}>
            <img src={iconPath} alt={`${text} button icon`} />
            {text}
        </button>
    )
}