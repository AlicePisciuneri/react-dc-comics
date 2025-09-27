// Importo le immagini social dalla cartella assets/img
import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

export default function AppFooter() {
    const dcComics = [
        "Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"
    ];
    const shop = [
        "Shop DC", "Shop DC Collectibles"
    ];
    const dc = [
        "Terms Of Use", "Privacy Policy", "Ad Choices", "Advertising", "Jobs",
        "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings",
        "Shop Help", "Contact Us"
    ];
    const sites = [
        "DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"
    ];

    return (
        <footer>
            <div className="footer-top">
                <div>
                    <h4>DC COMICS</h4>
                    <ul>
                        {dcComics.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>

                    <h4>SHOP</h4>
                    <ul>
                        {shop.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>DC</h4>
                    <ul>
                        {dc.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>SITES</h4>
                    <ul>
                        {sites.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <button>SIGN-UP NOW!</button>
                <div className="social">
                    <span>FOLLOW US</span>
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                    <img src={youtube} alt="YouTube" />
                    <img src={pinterest} alt="Pinterest" />
                    <img src={periscope} alt="Periscope" />
                </div>
            </div>
        </footer>
    );
}



//nel footer non abbiamo un solo array ma più sezioni diverse:dcComics → link della colonna “DC COMICS”
//shop → link della colonna “SHOP”
//dc → link della colonna “DC”
//sites → link della colonna “SITES”, Ognuno è un array separato.
//quando scrivo {shop.map((link, index) => (
//<li key={i}>{link}</li>
// )/)}

//React prende ogni elemento di shop ("Shop DC", "Shop DC Collectibles")
//e lo trasforma in <li> → <li>Shop DC</li>, <li>Shop DC Collectibles</li>




//<ul>
//{dcComics.map((link, i) => (
//<li key={i}>{link}</li>
//))}
//</ul>

//.map() prende l’array dcComics,lo scorre uno alla volta (questo è “iterare”),per ogni voce ("Characters", "Comics", "Movies", ecc.) crea un nuovo elemento <li>
//Alla prima iterazione: link = "Characters", i = 0 → genera <li key="0">Characters</li>
//Alla seconda: link = "Comics", i = 1 → genera <li key="1">Comics</li>
//Alla terza: link = "Movies", i = 2 → genera <li key="2">Movies</li>
//…e così via fino a “News”.



//. Perché key={i}
//React ti chiede una chiave unica (key) per ogni elemento generato.
//Serve per distinguere gli <li> e aggiornare la pagina più velocemente.
//Qui usiamo i (indice del ciclo), che va bene perché la lista è statica.
//In pratica: abbiamo preso un array di parole e lo abbiamo iterato per
// trasformarlo automaticamente in una lista HTML <ul>...</ul>.