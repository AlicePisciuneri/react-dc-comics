import "./productCardModule.css";

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

