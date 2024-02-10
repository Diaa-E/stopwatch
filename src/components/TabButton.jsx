export default function TabButton({text, iconPath})
{
    return (
        <>
            <button role="tab"><img src={iconPath} alt={`${text}'s tab icon`}/>{text}</button>
        </>
    )
}