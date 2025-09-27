import dcLogo from '../assets/img/dc-logo.png';

export default function AppHeader() {
    // Array con le voci del menu
    const menuLinks = [
        "Characters", "Comics", "Movies", "TV",
        "Games", "Collectibles", "Videos", "Fans",
        "News", "Shop"
    ];

    return (
        <header className="site-header">
            <div className="logo">
                <img src={dcLogo} alt="DC Logo" />
            </div>
            <nav>
                <ul>
                    {menuLinks.map((link, i) => (
                        <li key={i}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
