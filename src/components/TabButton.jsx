export default function TabButton({text, iconPath, onClick})
{
    return (
        <>
            <button onClick={onClick} role="tab">
                <img src={iconPath} alt={`${text}'s tab icon`}/>
                {text}
            </button>
        </>
    )
}