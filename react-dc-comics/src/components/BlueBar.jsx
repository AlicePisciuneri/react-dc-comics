export default function BlueBar() {
    const links = [
        { icon: "/assets/img/buy-comics-digital-comics.png", text: "DIGITAL COMICS" },
        { icon: "/assets/img/buy-comics-merchandise.png", text: "DC MERCHANDISE" },
        { icon: "/assets/img/buy-comics-subscriptions.png", text: "SUBSCRIPTION" },
        { icon: "/assets/img/buy-comics-shop-locator.png", text: "COMIC SHOP LOCATOR" },
        { icon: "/assets/img/buy-dc-power-visa.svg", text: "DC POWER VISA" },
    ];

    return (
        <div className="blue-bar">
            <ul>
                {links.map((item, i) => (
                    <li key={i}>
                        <img src={item.icon} alt={item.text} />
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
