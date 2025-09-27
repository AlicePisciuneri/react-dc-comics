import "./BlueBar.css";

// Importo le immagini
import digitalComics from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscription from "../assets/img/buy-comics-subscriptions.png";
import shopLocator from "../assets/img/buy-comics-shop-locator.png";
import powerVisa from "../assets/img/buy-dc-power-visa.svg";

export default function BlueBar() {
    // Array con immagini e testi
    const items = [
        { icon: digitalComics, text: "Digital Comics" },
        { icon: merchandise, text: "DC Merchandise" },
        { icon: subscription, text: "Subscription" },
        { icon: shopLocator, text: "Comic Shop Locator" },
        { icon: powerVisa, text: "DC Power Visa" }
    ];

    return (
        <div className="blue-bar">
            {items.map(function (item, index) {
                return (
                    <div key={index} className="item">
                        <img src={item.icon} alt={item.text} />
                        <span>{item.text}</span>
                    </div>
                );
            })}
        </div>
    );
}
