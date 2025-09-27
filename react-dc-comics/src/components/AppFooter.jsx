export default function AppFooter()
export default function AppFooter() {
    // Array per ogni colonna del footer
    const dcComics = [
        "Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"
    ];
    const shop = [
        "Shop DC", "Shop DC Collectibles"
    ];
    const dc = [
        "Terms Of Use", "Privacy Policy", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"
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
                        {dcComics.map((link, i) => (
                            <li key={i}>{link}</li>
                        ))}
                    </ul>

                    <h4>SHOP</h4>
                    <ul>
                        {shop.map((link, i) => (
                            <li key={i}>{link}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>DC</h4>
                    <ul>
                        {dc.map((link, i) => (
                            <li key={i}>{link}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4>SITES</h4>
                    <ul>
                        {sites.map((link, i) => (
                            <li key={i}>{link}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <button>SIGN-UP NOW!</button>
                <div className="social">
                    <span>FOLLOW US</span>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-solid fa-location-dot"></i>
                </div>
            </div>
        </footer>
    );
}



//nel footer non abbiamo un solo array ma più sezioni diverse:dcComics → link della colonna “DC COMICS”
//shop → link della colonna “SHOP”
//dc → link della colonna “DC”
//sites → link della colonna “SITES”, Ognuno è un array separato.
//quando scrivo {shop.map((link, i) => (
//<li key={i}>{link}</li>
// )/)}

//React prende ogni elemento di shop ("Shop DC", "Shop DC Collectibles")
//e lo trasforma in <li> → <li>Shop DC</li>, <li>Shop DC Collectibles</li>
