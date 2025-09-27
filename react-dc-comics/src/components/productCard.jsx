import "./productCardModule.css";  //Vite/React carica il CSS che contiene le classi usate dalla card

export default function ProductCard({ thumb, series, type, price }) {
    return (
        <div className="product-card">
            <img src={thumb} alt={series} />
            <h3>{series}</h3>
            <p>{type}</p>
            <span className="price">{price}</span>
        </div>
    );
}

//punti salienti del file ProductCard.jsx
// Creo un componente funzione React.
//Tra le parentesi graffe facciamo destructuring
//dei props: invece di scrivere props.thumb ecc., estraggo direttamente thumb, series, type, price.

//div.product-card è il contenitore; la classe è usata dal CSS per lo stile.<img src={thumb} alt={series} /> usa l’URL dell’immagine
// ricevuto via prop e mette un alt descrittivo
// (accessibilità).{series}, {type}, {price} stampano i valori ricevuti dal genitore.
//Nota lezione di giovedì 25 : la key non si mette qui; la key si mette dove fai il .map() (nel genitore)
//perché React ha bisogno della chiave sull’elemento di lista, non dentro il singolo componente.

//ProductCard.jsx è un componente presentazionale: riceve i dati dal genitore via props, li mostra con del JSX semplice e uno stile dedicato.
//La logica di ciclo (.map) e la key restano nel genitore che decide quante card creare.