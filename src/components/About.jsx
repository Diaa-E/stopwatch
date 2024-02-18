import "../styles/About.css";

export default function About({version})
{
    return (
        <div data-testid="about" className="about">
            <h1 className="app-title">Stopwatch v{version}</h1>
            <p role="paragraph" className="info">Project's repo: <a href="https://github.com/Diaa-E/stopwatch">Stopwatch repo on Github</a></p>
            <p role="paragraph" className="info">© Diaa E. <a href="https://github.com/Diaa-E">Diaa E. on Github</a></p>
        </div>
    )
}