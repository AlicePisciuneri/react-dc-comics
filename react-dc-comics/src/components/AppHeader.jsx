
import dcLogo from '../assets/img/dc-logo.png'

export default function AppHeader() {
    const headerLinks = [
        "Characters",
        "Comics",
        "Movies",
        "TV",
        "Games",
        "Collectibles",
        "Videos",
        "Fans",
        "News",
        "Shop"
    ];

    return (
        <header>
            <div className="logo">
                <img src="./assets/img/dc-logo.png" alt="logo DC" />
            </div>
            <nav>
                <ul>
                    {headerLinks.map((link, index) => (
                        <li key={index}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
